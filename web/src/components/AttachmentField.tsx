"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, Paperclip, UploadCloud, X } from "lucide-react";
import {
  ACCEPT_ATTR,
  ATTACHMENT_FIELD,
  MAX_FILES,
  MAX_TOTAL_BYTES,
  formatBytes,
  validateAttachments,
} from "@/lib/attachments";

type Props = {
  /** Server-side error for this field, if any. */
  error?: string;
  /** Changes after every submission so the native input can be re-synced after React resets the form. */
  submission: unknown;
};

export function AttachmentField({ error, submission }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [localError, setLocalError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  // Mirror the chosen files into the real <input type="file"> so they are submitted with the form.
  const sync = (list: File[]) => {
    if (!inputRef.current) return;
    const dt = new DataTransfer();
    list.forEach((f) => dt.items.add(f));
    inputRef.current.files = dt.files;
  };

  // React resets uncontrolled inputs after a form action; put the files back (e.g. after a validation error).
  useEffect(() => {
    sync(files);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submission]);

  const add = (incoming: FileList | null) => {
    if (!incoming?.length) return;
    const merged = [...files];
    for (const f of Array.from(incoming)) {
      if (!merged.some((m) => m.name === f.name && m.size === f.size)) merged.push(f);
    }
    const problem = validateAttachments(merged);
    if (problem) {
      setLocalError(problem);
      sync(files);
      return;
    }
    setLocalError(null);
    setFiles(merged);
    sync(merged);
  };

  const remove = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setLocalError(null);
    setFiles(next);
    sync(next);
  };

  const message = localError ?? error;
  const total = files.reduce((sum, f) => sum + f.size, 0);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between pl-1 text-xs font-medium text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <Paperclip className="size-3.5" /> Attachments <span className="text-slate-500">(optional)</span>
        </span>
        {files.length > 0 && (
          <span className="text-slate-500">
            {files.length}/{MAX_FILES} · {formatBytes(total)} of {formatBytes(MAX_TOTAL_BYTES)}
          </span>
        )}
      </div>

      <label
        htmlFor="field-attachments"
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          add(e.dataTransfer.files);
        }}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed px-4 py-6 text-center transition ${
          dragging
            ? "border-cyan-400/70 bg-cyan-400/[0.06]"
            : message
              ? "border-rose-500/60 bg-white/[0.02]"
              : "border-white/15 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]"
        }`}
      >
        <span className="grid size-10 place-items-center rounded-xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
          <UploadCloud className="size-5" />
        </span>
        <span className="text-sm text-slate-300">
          <span className="font-semibold text-white underline decoration-cyan-400/60 underline-offset-4">Choose files</span>{" "}
          or drag them here
        </span>
        <span className="text-xs text-slate-500">
          CV, job spec or requirements — PDF, Word, Excel, PowerPoint, images or text · up to {MAX_FILES} files,{" "}
          {formatBytes(MAX_TOTAL_BYTES)} total
        </span>
        <input
          ref={inputRef}
          id="field-attachments"
          type="file"
          name={ATTACHMENT_FIELD}
          multiple
          accept={ACCEPT_ATTR}
          aria-invalid={message ? true : undefined}
          aria-describedby={message ? "field-attachments-error" : undefined}
          onChange={(e) => add(e.target.files)}
          className="sr-only"
        />
      </label>

      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((f, i) => (
            <li
              key={`${f.name}-${f.size}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-2 pl-3 pr-2 text-sm"
            >
              <FileText className="size-4 shrink-0 text-cyan-300" />
              <span className="min-w-0 flex-1 truncate text-slate-200">{f.name}</span>
              <span className="shrink-0 text-xs text-slate-500">{formatBytes(f.size)}</span>
              <button
                type="button"
                onClick={() => remove(i)}
                aria-label={`Remove ${f.name}`}
                className="grid size-7 shrink-0 place-items-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {message && (
        <p id="field-attachments-error" className="mt-1.5 pl-1 text-xs text-rose-400">
          {message}
        </p>
      )}
    </div>
  );
}
