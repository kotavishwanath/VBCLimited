// Shared by the client (instant feedback) and the server action (authoritative checks).

export const ATTACHMENT_FIELD = "attachments";
export const MAX_FILES = 3;
// Vercel caps function request bodies at 4.5 MB, so keep the total comfortably below that.
export const MAX_TOTAL_BYTES = 4 * 1024 * 1024;

export const ALLOWED_EXTENSIONS = [
  "pdf",
  "doc",
  "docx",
  "rtf",
  "odt",
  "txt",
  "xls",
  "xlsx",
  "csv",
  "ppt",
  "pptx",
  "png",
  "jpg",
  "jpeg",
] as const;

export const ACCEPT_ATTR = ALLOWED_EXTENSIONS.map((ext) => `.${ext}`).join(",");

export function extensionOf(name: string) {
  const dot = name.lastIndexOf(".");
  return dot === -1 ? "" : name.slice(dot + 1).toLowerCase();
}

export function isAllowedExtension(name: string) {
  return (ALLOWED_EXTENSIONS as readonly string[]).includes(extensionOf(name));
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(/\.0$/, "")} MB`;
}

/** Returns an error message, or null when the selection is acceptable. */
export function validateAttachments(files: { name: string; size: number }[]): string | null {
  if (files.length > MAX_FILES) return `You can attach up to ${MAX_FILES} files.`;
  const bad = files.find((f) => !isAllowedExtension(f.name));
  if (bad) return `“${bad.name}” isn’t a supported file type.`;
  const empty = files.find((f) => f.size === 0);
  if (empty) return `“${empty.name}” is empty.`;
  const total = files.reduce((sum, f) => sum + f.size, 0);
  if (total > MAX_TOTAL_BYTES) return `Attachments must be ${formatBytes(MAX_TOTAL_BYTES)} or less in total.`;
  return null;
}
