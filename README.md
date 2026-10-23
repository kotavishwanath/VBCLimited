# VBC Limited — vbclimited.com

Marketing and careers website for VBC Limited (Versatile Business Consultants Ltd).

| Folder | What it is |
| --- | --- |
| [`web/`](web) | **The live site.** Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS v4, deployed on Vercel. |
| [`legacy/`](legacy) | The original PHP/Bootstrap site (previously on HostingRaja), kept for reference only. Not deployed. |

**Where things run**

| Service | Used for |
| --- | --- |
| **Vercel** | Hosting (project `vbc-limited`) **and DNS** for vbclimited.com |
| **GoDaddy** | Domain registration only. Its nameservers point to Vercel. |
| **Resend** | Sends the website's contact/application form emails |
| **Google Workspace** | Company mailboxes (e.g. `jobs@vbclimited.com`) |

---

## Quick start

```bash
git clone https://github.com/kotavishwanath/VBCLimited.git
cd VBCLimited
nvm install        # reads .nvmrc → Node 22
nvm use
npm install        # installs web/ dependencies
cp web/.env.example web/.env.local
npm run dev        # http://localhost:3000
```

You can run these commands from the repo root or from `web/`. The root `package.json` just passes them through to `web/`.

## Prerequisites

| Tool | Version | Notes |
| --- | --- | --- |
| **Node.js** | **22 LTS** (minimum 20.9) | Pinned in [`.nvmrc`](.nvmrc). Next.js 16 does not run on Node 18 or older. |
| npm | 10+ (ships with Node 22) | The project uses `package-lock.json`, so don't mix in yarn, pnpm or bun. |
| nvm | any | Recommended: [nvm](https://github.com/nvm-sh/nvm). |
| Git | any | |

### Apple Silicon Macs (M1/M2/M3/M4)

Use a **native arm64** Node build. If Node was installed from a Rosetta (Intel) terminal, native packages such as
`lightningcss` will fail with errors like `Cannot find module '../lightningcss.darwin-x64.node'`.

```bash
node -p process.arch   # must print "arm64" on Apple Silicon
```

If it prints `x64`, reinstall that Node version natively, then reinstall the dependencies:

```bash
nvm uninstall <version>
arch -arm64 zsh -c 'source ~/.nvm/nvm.sh && nvm install 22'
rm -rf web/node_modules web/.next && npm install
```

## Environment variables

Copy [`web/.env.example`](web/.env.example) to `web/.env.local`. `.env.local` is git-ignored, so never commit real secrets.

| Variable | Required? | Purpose |
| --- | --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` | For sending email | Resend SMTP: `smtp.resend.com`, `465`, `resend` (already in the template) |
| `SMTP_PASS` | For sending email | A **Resend API key** (`re_…`) with sending access to `vbclimited.com`. Ask the project owner. |
| `MAIL_FROM` | For sending email | Must be an address on the verified domain, e.g. `VBC Limited Website <website@vbclimited.com>` |
| `MAIL_TO`, `MAIL_CC` | Optional | Recipient and CC for form submissions (default `jobs@vbclimited.com`) |
| `NEXT_PUBLIC_GA_ID` | Optional | GA4 measurement ID (`G-…`). Leave it empty to turn analytics off. |

**You don't need any secrets to develop locally.** When `SMTP_PASS` is empty, contact and application form
submissions (including attachment names) are printed in the terminal instead of being emailed.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload (Turbopack) |
| `npm run build` | Production build and type check |
| `npm start` | Serves the production build (run `build` first) |
| `npm run lint` | ESLint |

## Project structure

```
web/
├── src/app/                 Routes (App Router)
│   ├── page.tsx             Home
│   ├── careers/             /careers and /careers/[slug]
│   ├── actions.ts           Server Action: validates the form and emails it (with attachments)
│   ├── layout.tsx           Fonts, metadata, navbar and footer, Google Analytics
│   └── sitemap.ts, robots.ts, manifest.ts, not-found.tsx
├── src/components/          UI: navbar, footer, contact form, attachment field, home sections
├── src/lib/
│   ├── site.ts              Company details, services, stats and other copy
│   ├── jobs.ts              Job listings (add or edit roles here)
│   └── attachments.ts       Upload rules shared by the browser and the server
├── public/images/           Logo, icons, banner
├── next.config.ts           Redirects from the old PHP URLs, security headers, upload size limit
├── .env.example             Environment template
└── DEPLOYMENT.md            Vercel deployment guide
```

## Common tasks

- **Edit company info, services or stats:** `web/src/lib/site.ts`
- **Post a job:** add an entry to the `jobs` array in `web/src/lib/jobs.ts` (there's a commented example). Roles past their `closingDate` are marked closed automatically.
- **Change the upload rules** (allowed file types, 3 files / 4 MB total): `web/src/lib/attachments.ts`. Keep the total under 4.5 MB, Vercel's request limit, and keep `serverActions.bodySizeLimit` in `next.config.ts` in step.

## Deployment

The site deploys to **Vercel** (project `vbc-limited`, **Root Directory = `web`**). Every push to `master`
deploys to production at https://www.vbclimited.com. See [`web/DEPLOYMENT.md`](web/DEPLOYMENT.md) for environment
variables, DNS records, email setup and troubleshooting.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `npm ERR! enoent … VBCLimited/package.json` | You're on an old checkout. Pull the latest code, or `cd web` first. |
| `Cannot find module '../lightningcss.darwin-x64.node'` (or a similar `.node` file) | Your Node build is the wrong architecture. See [Apple Silicon Macs](#apple-silicon-macs-m1m2m3m4), then `rm -rf web/.next`. |
| The same error keeps coming back after you switch Node versions | Turbopack caches build errors. Stop the server, run `rm -rf web/.next`, and restart. |
| `Port 3000 is in use … using 3001` | Another dev server is running. Stop it, or use the port shown in the terminal. |
| Form says "We couldn't send your message" (production) | The Resend settings (`SMTP_*`, `MAIL_FROM`) are missing or wrong in Vercel, or Vercel wasn't redeployed after changing them. See `web/DEPLOYMENT.md`. |
| Unexpected type errors about `PageProps` / `LayoutProps` | Run `npx next typegen` inside `web/` (it also runs automatically on `dev` and `build`). |
