"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { sendMessage, type ContactState, type FieldName } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

type Props = {
  defaultSubject?: string;
  submitLabel?: string;
  messagePlaceholder?: string;
};

export function ContactForm({
  defaultSubject = "",
  submitLabel = "Send message",
  messagePlaceholder = "Tell us about your hiring needs or project…",
}: Props) {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  // React resets the form after each submission; re-seed values on validation errors.
  const value = (name: FieldName) => state.values?.[name];

  return (
    <form action={formAction} noValidate className="relative space-y-5">
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" defaultValue={value("name")} error={state.errors?.name} minLength={2} maxLength={100} />
        <Field label="Email address" name="email" type="email" autoComplete="email" defaultValue={value("email")} error={state.errors?.email} maxLength={200} />
      </div>
      <Field label="Subject" name="subject" defaultValue={value("subject") ?? defaultSubject} error={state.errors?.subject} minLength={3} maxLength={150} />
      <Field label="Message" name="message" textarea placeholder={messagePlaceholder} defaultValue={value("message")} error={state.errors?.message} minLength={10} maxLength={5000} />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40 disabled:opacity-70"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          {pending ? <Loader2 className="size-4 animate-spin" /> : null}
          {pending ? "Sending…" : submitLabel}
          {!pending && <ArrowRight className="size-4 transition group-hover:translate-x-1" />}
        </button>

        <p aria-live="polite" className="text-sm">
          {state.status === "success" && (
            <span className="inline-flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="size-4" /> {state.message}
            </span>
          )}
          {state.status === "error" && (
            <span className="inline-flex items-center gap-2 text-rose-400">
              <AlertCircle className="size-4" /> {state.message}
            </span>
          )}
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: FieldName;
  type?: string;
  textarea?: boolean;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
};

function Field({ label, name, type = "text", textarea, error, ...rest }: FieldProps) {
  const id = `field-${name}`;
  const cls = `peer block w-full rounded-2xl border bg-white/[0.03] px-4 pb-3 pt-6 text-[15px] text-white placeholder-transparent outline-none transition focus:bg-white/[0.06] focus:placeholder-slate-500 ${
    error ? "border-rose-500/60" : "border-white/10 focus:border-cyan-400/60"
  }`;
  const common = {
    id,
    name,
    required: true,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: cls,
    ...rest,
    placeholder: rest.placeholder ?? label,
  };

  return (
    <div className="relative">
      {textarea ? <textarea rows={5} {...common} className={`${cls} resize-y`} /> : <input type={type} {...common} />}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs font-medium text-slate-400 transition-all peer-placeholder-shown:top-4.5 peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-300"
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 pl-1 text-xs text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}
