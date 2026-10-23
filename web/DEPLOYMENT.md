# Deploying to Vercel

The site in `web/` is a standard Next.js 16 app. Vercel builds it with zero configuration — the only
project-specific setting is the **Root Directory** (`web`), because the repo also contains `legacy/`.

## Current setup

| | |
| --- | --- |
| Vercel project | `kotavishwanaths-projects/vbc-limited` |
| Production URL | https://www.vbclimited.com (`vbclimited.com` → 308 redirect to `www`) |
| Vercel URL | https://vbc-limited-kappa.vercel.app |
| Git | `github.com/kotavishwanath/VBCLimited`, branch `master` → Production |
| Root Directory | `web` |
| Domain registrar | GoDaddy (nameservers set to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`) |
| DNS | Vercel DNS (account-level **Domains → vbclimited.com**) |
| Form email | Resend (domain `vbclimited.com` verified, region eu-west-1) |
| Mailboxes | Google Workspace (`jobs@vbclimited.com`, …) |
| Env vars set | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO`, `MAIL_CC` |
| Optional | `NEXT_PUBLIC_GA_ID` (GA4) |

The old PHP site was hosted on HostingRaja (cPanel). It was migrated to Vercel in October 2026; a full cPanel
backup was taken and the HostingRaja plan is not being renewed. The original code is kept in `../legacy/`.

The repo root is linked to the project (`.vercel/`, git-ignored), so `npx vercel deploy --prod` run from the
**repo root** deploys the working copy. `.vercelignore` keeps `.env*` files and build output out of uploads.

## 1. Create the project

### Option A — Git integration (recommended: auto-deploys on every push)

1. Push the repo to GitHub (`kotavishwanath/VBCLimited`).
2. In Vercel: **Add New → Project → Import** the repository.
3. **Before clicking Deploy**, click **Edit** next to *Root Directory* and select `web`.
   The Framework Preset then switches to **Next.js** automatically. If you skip this, Vercel builds the
   repo root and either fails ("No Next.js version detected") or "succeeds" with preset *Other* and serves 404.
   Configure:
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
| `SMTP_HOST` | `smtp.resend.com` | Resend's SMTP server |
| `SMTP_PORT` | `465` | Implicit TLS |
| `SMTP_USER` | `resend` | Literally the word `resend` |
| `SMTP_PASS` | *Resend API key* (`re_…`) | Mark as **Sensitive**. See section 4. |
| `MAIL_FROM` | `VBC Limited Website <website@vbclimited.com>` | Must be an address on the verified Resend domain |
| `MAIL_TO` | `jobs@vbclimited.com` | Where form submissions arrive |
| `MAIL_CC` | `kvishwanath0551@gmail.com` | Optional |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Optional. GA4 measurement ID; leave unset to disable analytics |

Changing an environment variable only takes effect after a **redeploy**
(Deployments → ⋯ → Redeploy). `NEXT_PUBLIC_*` values are embedded at build time.

## 3. Domain and DNS (vbclimited.com)

The domain is registered at **GoDaddy**, but its nameservers point to **Vercel DNS**, so every DNS record is
managed in Vercel: account-level **Domains → vbclimited.com → DNS Records** (not the project's Networking page).

**Project domains** (`vbc-limited` → Networking → Domains):

| Domain | Configuration |
| --- | --- |
| `www.vbclimited.com` | Production (primary) |
| `vbclimited.com` | 308 redirect → `www.vbclimited.com` |

**DNS records** (Vercel DNS):

| Name | Type | Value | Priority | Purpose |
| --- | --- | --- | --- | --- |
| *(root)* | MX | `aspmx.l.google.com` | 1 | Google Workspace mail |
| *(root)* | MX | `alt1.aspmx.l.google.com` | 5 | Google Workspace mail |
| *(root)* | MX | `alt2.aspmx.l.google.com` | 5 | Google Workspace mail |
| *(root)* | MX | `alt3.aspmx.l.google.com` | 10 | Google Workspace mail |
| *(root)* | MX | `alt4.aspmx.l.google.com` | 10 | Google Workspace mail |
| *(root)* | TXT | `v=spf1 include:_spf.google.com ~all` | | SPF for Google Workspace |
| `resend._domainkey` | TXT | `p=MIGfMA0GCSqGSIb3DQEB…` (from Resend) | | DKIM for Resend |
| `send` | CNAME | `send.forge.rmta.net` | | Resend sending (SPF/bounces) |
| `rsend` | CNAME | `rsend-euw1.forge.rmta.net` | | Resend sending |
| `_dmarc` | TXT | `v=DMARC1; p=none;` | | DMARC (monitoring only) |
| *(root)*, `*` | ALIAS | `…vercel-dns-017.com` | | Added automatically by Vercel (locked) |
| *(root)* | CAA | `letsencrypt.org`, `sectigo.com`, `pki.goog` | | Added automatically by Vercel (locked) |

Notes:

- **Never delete the MX records.** They deliver all `@vbclimited.com` mail to Google Workspace.
- Keep only **one** SPF record on the root. Resend uses the `send` subdomain, so its records don't touch the root SPF.
- Adding a named record (e.g. `resend._domainkey`) shows a *Wildcard Domain Override* warning. That's expected:
  it only stops the `*` website wildcard from applying to that name.
- To switch DNS hosting in the future, recreate the records above at the new provider first, then change the
  nameservers in GoDaddy (My Products → vbclimited.com → DNS → Nameservers).

Old URLs (`/index.php`, `/career.php`, `/index-old.html`) permanently redirect to the new pages.

## 4. Email (Resend)

The contact and application forms send email through [Resend](https://resend.com) using SMTP, so the code
(`nodemailer` in `src/app/actions.ts`) is provider-agnostic: switching providers only means changing env vars.

- **Account:** Resend team `vbclimited`; domain `vbclimited.com` (region eu-west-1) is **Verified**.
- **Sending:** enabled. **Receiving: keep OFF.** It would add MX records that conflict with Google Workspace.
- **API key:** Resend → API keys → *Create API key* → Permission **Sending access**, Domain **vbclimited.com**.
  Store it only in Vercel as `SMTP_PASS` (Sensitive). To rotate: create a new key, update `SMTP_PASS`,
  redeploy, then delete the old key.
- **Limits (free plan):** 100 emails/day, 3,000/month. Attachments are allowed (the site caps them at 4 MB).
- **Monitoring:** Resend → **Emails** shows each message and its delivery status; Vercel → Logs shows `[contact]` errors.

How a form submission travels: visitor submits the form → Vercel server action → Resend sends from
`website@vbclimited.com` → delivered to `MAIL_TO` (and `MAIL_CC`) in Google Workspace, with `Reply-To` set to
the visitor so replies go straight to them.

## 5. Verify after deploying

- [ ] Home, `/careers` and a 404 page load over HTTPS on `https://www.vbclimited.com`.
- [ ] `https://vbclimited.com` returns `308` to `https://www.vbclimited.com/`.
- [ ] `/career.php` redirects to `/careers`.
- [ ] Submit the contact form with a small PDF → it appears as *Delivered* in Resend and arrives at `MAIL_TO`, with `Reply-To` set to the sender.
- [ ] An ordinary email sent to `jobs@vbclimited.com` still arrives in Google Workspace.
- [ ] `/sitemap.xml` and `/robots.txt` load.
- [ ] (If set) GA4 → Reports → Realtime shows your visit.

Quick command-line checks:

```bash
dig @8.8.8.8 vbclimited.com NS +short        # ns1/ns2.vercel-dns.com
dig @8.8.8.8 vbclimited.com MX +short        # the five Google servers
dig @8.8.8.8 www.vbclimited.com +short       # Vercel IPs (216.198.79.x)
curl -sI https://vbclimited.com | grep -iE "^HTTP|^location"     # 308 → www
curl -sI https://www.vbclimited.com | grep -iE "^HTTP|^server"   # 200, server: Vercel
```

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Build fails with "No Next.js version detected" | Root Directory is not set to `web`. Fix it in **Settings → Build and Deployment → Root Directory**, then redeploy. |
| Deployment is "Ready" in ~2s but every page is 404 | Same cause — Root Directory is `.` and Framework Preset became *Other*. Set Root Directory to `web` (preset becomes Next.js) and redeploy. |
| Env vars missing after re-importing | Environment variables belong to a project; a deleted/re-imported project starts empty. Re-add them. |
| Form says "We couldn't send your message" | Check the Resend settings in Vercel (`SMTP_HOST=smtp.resend.com`, `SMTP_USER=resend`, `SMTP_PASS` = valid API key, `MAIL_FROM` on `@vbclimited.com`) and redeploy. Vercel → Logs, search `[contact]`: `535`/`Invalid API key` = wrong key; `domain is not verified` = check Resend → Domains. |
| Resend shows *Delivered* but nothing arrives | Check Spam in Google Workspace and the `MAIL_TO` / `MAIL_CC` values. |
| Resend domain stuck on *Pending* | The `resend._domainkey`, `send` and `rsend` records are missing or mistyped in Vercel DNS. Check with `dig @ns1.vercel-dns.com resend._domainkey.vbclimited.com TXT +short`. |
| Normal email to `@vbclimited.com` stopped arriving | The Google MX records were removed or changed in Vercel DNS. Restore the five records in section 3. |
| Env change has no effect | Redeploy — variables are read at build/deploy time. |
| Domain shows "Invalid Configuration" | GoDaddy nameservers are no longer `ns1/ns2.vercel-dns.com`, or a nameserver change is still propagating (up to 48 h). |
| Some devices show an old version after DNS changes | DNS caching. Wait, or flush: Google https://developers.google.com/speed/public-dns/cache, Cloudflare https://1.1.1.1/purge-cache/, macOS `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`. |
