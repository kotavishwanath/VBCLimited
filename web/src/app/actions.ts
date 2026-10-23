"use server";

import nodemailer from "nodemailer";
import { ATTACHMENT_FIELD, extensionOf, validateAttachments } from "@/lib/attachments";
import { site } from "@/lib/site";

export type FieldName = "name" | "email" | "subject" | "message" | "attachments";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<FieldName, string>>;
  values?: Partial<Record<FieldName, string>>;
  sentAt?: number;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Strip line breaks from values that end up in mail headers.
const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ");

// Keep only a safe base name for the emailed attachment.
const safeFilename = (name: string) =>
  name
    .split(/[\\/]/)
    .pop()!
    .replace(/[^\w.\- ()]+/g, "_")
    .slice(-120) || "attachment";

// Leading bytes for binary formats, so a renamed executable can't pass as a CV.
const SIGNATURES: Record<string, number[][]> = {
  pdf: [[0x25, 0x50, 0x44, 0x46]],
  png: [[0x89, 0x50, 0x4e, 0x47]],
  jpg: [[0xff, 0xd8, 0xff]],
  jpeg: [[0xff, 0xd8, 0xff]],
  rtf: [[0x7b, 0x5c, 0x72, 0x74, 0x66]],
  docx: [[0x50, 0x4b, 0x03, 0x04]],
  xlsx: [[0x50, 0x4b, 0x03, 0x04]],
  pptx: [[0x50, 0x4b, 0x03, 0x04]],
  odt: [[0x50, 0x4b, 0x03, 0x04]],
  doc: [[0xd0, 0xcf, 0x11, 0xe0]],
  xls: [[0xd0, 0xcf, 0x11, 0xe0]],
  ppt: [[0xd0, 0xcf, 0x11, 0xe0]],
};

function matchesSignature(ext: string, bytes: Uint8Array) {
  const sigs = SIGNATURES[ext];
  if (sigs) return sigs.some((sig) => sig.every((b, i) => bytes[i] === b));
  // Plain-text formats (txt, csv): reject executables ("MZ") and binary content.
  return !(bytes[0] === 0x4d && bytes[1] === 0x5a) && !bytes.subarray(0, 1024).includes(0);
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never see this field. Pretend success for bots.
  if (field(formData, "company_website", 200)) {
    return { status: "success", message: "Thanks — your message is on its way." };
  }

  const values = {
    name: singleLine(field(formData, "name", 100)),
    email: singleLine(field(formData, "email", 200)),
    subject: singleLine(field(formData, "subject", 150)),
    message: field(formData, "message", 5000),
  };

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.subject.length < 3) errors.subject = "Please add a short subject.";
  if (values.message.length < 10) errors.message = "Please write at least 10 characters.";

  const files = formData
    .getAll(ATTACHMENT_FIELD)
    .filter((f): f is File => f instanceof File && f.size > 0);
  const attachmentError = validateAttachments(files);
  if (attachmentError) errors.attachments = attachmentError;

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  for (const file of files) {
    const content = Buffer.from(await file.arrayBuffer());
    if (!matchesSignature(extensionOf(file.name), content)) {
      return {
        status: "error",
        message: "Please fix the highlighted fields.",
        errors: { attachments: `“${safeFilename(file.name)}” doesn’t look like a valid ${extensionOf(file.name).toUpperCase()} file.` },
        values,
      };
    }
    attachments.push({ filename: safeFilename(file.name), content });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO, MAIL_CC } = process.env;
  const attachmentLine = attachments.length
    ? `\nAttachments: ${attachments.map((a) => a.filename).join(", ")}\n`
    : "";
  const text = `Name: ${values.name}\nEmail: ${values.email}\n${attachmentLine}\n${values.message}\n`;

  if (!SMTP_HOST || (SMTP_USER && !SMTP_PASS)) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] SMTP not configured — message not sent:\n", text);
      return {
        status: "success",
        message: "Thanks — your message is on its way. (dev mode: logged to console)",
        sentAt: Date.now(),
      };
    }
    console.error("[contact] SMTP_HOST / SMTP_PASS not set; cannot send email.");
    return {
      status: "error",
      message: `We couldn't send your message right now. Please email us at ${site.email}.`,
      values,
    };
  }

  try {
    const port = Number(SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });

    await transporter.sendMail({
      from: MAIL_FROM || `VBC Limited Website <${SMTP_USER?.includes("@") ? SMTP_USER : "website@vbclimited.com"}>`,
      to: MAIL_TO ?? site.email,
      cc: MAIL_CC || undefined,
      replyTo: { name: values.name, address: values.email },
      subject: `[Website] ${values.subject}`,
      text,
      attachments,
    });
  } catch (err) {
    console.error("[contact] Failed to send email", err);
    return {
      status: "error",
      message: `We couldn't send your message right now. Please email us at ${site.email}.`,
      values,
    };
  }

  return {
    status: "success",
    message: "Thanks — your message is on its way. We'll be in touch soon.",
    sentAt: Date.now(),
  };
}
