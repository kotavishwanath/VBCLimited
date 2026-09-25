# Deploying to Vercel

The site in `web/` is a standard Next.js 16 app. Vercel builds it with zero configuration — the only
project-specific setting is the **Root Directory** (`web`), because the repo also contains `legacy/`.

## Current setup

| | |
| --- | --- |
| Vercel project | `kotavishwanaths-projects/vbc-limited` |
| Production URL | https://vbc-limited.vercel.app |
| Git | `github.com/kotavishwanath/VBCLimited`, branch `master` → Production |
| Root Directory | `web` |
| Env vars set | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `MAIL_FROM`, `MAIL_TO`, `MAIL_CC` |
| Still needed | `SMTP_PASS` (Google App Password), optional `NEXT_PUBLIC_GA_ID`, custom domain |

The repo root is linked to the project (`.vercel/`, git-ignored), so `npx vercel deploy --prod` run from the
**repo root** deploys the working copy. `.vercelignore` keeps `.env*` files and build output out of uploads.

## 1. Create the project

### Option A — Git integration (recommended: auto-deploys on every push)

1. Push the repo to GitHub (`kotavishwanath/VBCLimited`).
2. In Vercel: **Add New → Project → Import** the repository.
3. Configure:
   | Setting | Value |
   | --- | --- |
   | Framework Preset | Next.js (auto-detected) |
   | Root Directory | `web` |
   | Build Command | `next build` (default) |
   | Install Command | `npm install` (default) |
   | Node.js Version | 22.x (Settings → Build and Deployment) |
4. Add the environment variables from step 2, then **Deploy**.

Every push to `master` then deploys to production; pull requests get preview URLs.

### Option B — Vercel CLI (deploy from your machine)

```bash
cd VBCLimited                    # repo root (Root Directory "web" is applied by Vercel)
nvm use 22
npx vercel login                 # opens the browser to authenticate
npx vercel link --project vbc-limited
npx vercel env add SMTP_PASS production   # prompts for the value; repeat for other variables
npx vercel deploy --prod
```

`.env.local` is never uploaded by the CLI; production values come from Vercel's environment variables.

## 2. Environment variables

Add these in **Project → Settings → Environment Variables** (Production, and Preview if you want forms
to send email from preview deployments):

| Name | Value | Notes |
| --- | --- | --- |
| `SMTP_HOST` | `smtp.gmail.com` | |
| `SMTP_PORT` | `465` | |
| `SMTP_USER` | `jobs@vbclimited.com` | Google Workspace mailbox that sends the email |
| `SMTP_PASS` | *Google App Password* | Mark as **Sensitive**. See below. |
| `MAIL_FROM` | `VBC Limited Website <jobs@vbclimited.com>` | Must be `SMTP_USER` or a verified alias |
| `MAIL_TO` | `jobs@vbclimited.com` | Where form submissions arrive |
| `MAIL_CC` | `kvishwanath0551@gmail.com` | Optional |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Optional. GA4 measurement ID; leave unset to disable analytics |

**Creating the App Password:** sign in as `jobs@vbclimited.com` → enable 2-Step Verification →
https://myaccount.google.com/apppasswords → create one called "Website" → paste the 16-character code
as `SMTP_PASS`. (If the option is missing, a Workspace admin must allow 2-Step Verification.)

Changing an environment variable only takes effect after a **redeploy**
(Deployments → ⋯ → Redeploy). `NEXT_PUBLIC_*` values are embedded at build time.

## 3. Connect vbclimited.com

1. **Project → Settings → Domains → Add** `vbclimited.com`, then add `www.vbclimited.com`
   and choose to redirect one to the other (Vercel suggests `www` → apex or vice versa).
2. At your domain registrar / DNS provider, set the records Vercel displays — typically:

   | Type | Name | Value |
   | --- | --- | --- |
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   Use the exact values shown in the Vercel dashboard if they differ.
3. **Keep your existing `MX` records** — they deliver `@vbclimited.com` email and must not change.
4. Vercel issues the HTTPS certificate automatically once DNS resolves (minutes to a few hours).

Old URLs (`/index.php`, `/career.php`, `/index-old.html`) permanently redirect to the new pages.

## 4. Verify after deploying

- [ ] Home, `/careers` and a 404 page load over HTTPS on the custom domain.
- [ ] `/career.php` redirects to `/careers`.
- [ ] Submit the contact form → email arrives at `MAIL_TO` with `Reply-To` set to the sender.
- [ ] `/sitemap.xml` and `/robots.txt` load.
- [ ] (If set) GA4 → Reports → Realtime shows your visit.
- [ ] Re-submit the site in Google Search Console (the existing verification tag is kept).

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Build fails with "No Next.js version detected" | Root Directory is not set to `web`. |
| Form says "We couldn't send your message" | Check `SMTP_*` variables and the function logs (Deployments → Logs). `535 Username and Password not accepted` means the App Password is wrong or 2-Step Verification is off. |
| Env change has no effect | Redeploy — variables are read at build/deploy time. |
| Domain stuck on "Invalid Configuration" | DNS hasn't propagated or records don't match the dashboard values. |
