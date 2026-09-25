# VBC Limited — website

Next.js 16 (App Router) + Tailwind CSS v4 rebuild of vbclimited.com. The original PHP site lives in `../legacy/`.

## Requirements

- Node.js 20.9+ (`nvm use 22`)

## Develop

```bash
npm install
cp .env.example .env.local   # then add SMTP_PASS / NEXT_PUBLIC_GA_ID
npm run dev
```

Without `SMTP_PASS`, form submissions are logged to the terminal in development.

## Structure

- `src/app` — routes: `/`, `/careers`, `/careers/[slug]`, plus sitemap, robots and manifest
- `src/app/actions.ts` — server action that validates and emails contact/application forms
- `src/components` — layout, shared UI and home page sections
- `src/lib/site.ts` — company details, services and copy
- `src/lib/jobs.ts` — job listings (add or edit roles here)

Legacy URLs (`/index.php`, `/career.php`) permanently redirect to the new pages (see `next.config.ts`).

## Build

```bash
npm run build && npm start
```

## Deploy to Vercel

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full guide (project setup, environment variables, domain/DNS
and post-deploy checks). In short: import the repo in Vercel with **Root Directory** = `web`, add the
variables from `.env.example`, deploy, then point `vbclimited.com` at Vercel.

## Email (Google Workspace / Gmail)

Forms send via `smtp.gmail.com:465` as `SMTP_USER`. Create an App Password for that account
(2-Step Verification must be on) at https://myaccount.google.com/apppasswords and set it as `SMTP_PASS`.
Until `SMTP_PASS` is set, development submissions are logged to the terminal.

## Analytics

Set `NEXT_PUBLIC_GA_ID` to a GA4 measurement ID (`G-…`) to enable Google Analytics. Leave it empty to disable.

## Job listings

Edit the `jobs` array in `src/lib/jobs.ts`. When it is empty, `/careers` shows a "no open roles" message
with the general application form. Roles past their `closingDate` are automatically marked closed.
