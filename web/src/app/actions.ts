"use server";

import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type FieldName = "name" | "email" | "subject" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<FieldName, string>>;
  values?: Partial<Record<FieldName, string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Strip line breaks from values that end up in mail headers.
const singleLine = (value: string) => value.replace(/[\r\n]+/g, " ");

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

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO, MAIL_CC } = process.env;
  const text = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}\n`;

  if (!SMTP_HOST || (SMTP_USER && !SMTP_PASS)) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] SMTP not configured — message not sent:\n", text);
      return { status: "success", message: "Thanks — your message is on its way. (dev mode: logged to console)" };
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
      from: MAIL_FROM || `VBC Limited Website <${SMTP_USER || "no-reply@vbclimited.com"}>`,
      to: MAIL_TO ?? site.email,
      cc: MAIL_CC || undefined,
      replyTo: { name: values.name, address: values.email },
      subject: `[Website] ${values.subject}`,
      text,
    });
  } catch (err) {
    console.error("[contact] Failed to send email", err);
    return {
      status: "error",
      message: `We couldn't send your message right now. Please email us at ${site.email}.`,
      values,
    };
  }

  return { status: "success", message: "Thanks — your message is on its way. We'll be in touch soon." };
}
