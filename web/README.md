# VBC Limited — web

The Next.js app behind vbclimited.com.

**Getting started, required Node version, environment variables and troubleshooting are in the
[root README](../README.md).** Deployment is covered in [DEPLOYMENT.md](DEPLOYMENT.md).

```bash
nvm use                         # Node 22 (see .nvmrc); must be arm64 on Apple Silicon
npm install
cp .env.example .env.local      # no secrets needed for local development
npm run dev
```

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4 (design tokens and utilities in `src/app/globals.css`)
- `lucide-react` icons, `nodemailer` (sending through Resend SMTP) for form email, `@next/third-parties` for GA4
- Hosted on Vercel; DNS for vbclimited.com is also on Vercel (domain registered at GoDaddy)

## Where things live

| Path | Contents |
| --- | --- |
| `src/app/page.tsx` | Home page (sections in `src/components/home/`) |
| `src/app/careers/` | `/careers` and `/careers/[slug]` |
| `src/app/actions.ts` | Form Server Action: validation, attachment checks, sending via Resend SMTP |
| `src/lib/site.ts` | Company details, services, stats and other copy |
| `src/lib/jobs.ts` | Job listings |
| `src/lib/attachments.ts` | Upload limits and allowed file types |
| `next.config.ts` | Redirects from the old PHP URLs, security headers, Server Action body size limit |

Before opening a PR, run `npm run lint` and `npm run build`.
