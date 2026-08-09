# One Billion Dream

**Independent projects, openly shared.**

One Billion Dream is the public home for projects, experiments and ideas built independently by [@SJpopov](https://github.com/SJpopov). Visitors can explore the work, follow its development, share the site or optionally support future work.

For the current implementation decisions, external-service status and the preserved pre-redesign backup, see [`PROJECT_STATUS.md`](PROJECT_STATUS.md).

🌐 **[onebilliondream.com](https://onebilliondream.com)**

## Current projects

- **PC Audit Copilot** — a working Windows security-audit prototype with validation still in progress.
- **Insurance Workflow Automation** — a private professional workflow project in active development.
- **Game Mission Control** — a working browser-game automation, monitoring and recovery system.
- **Knowledge System** — a personal learning and connected-notes project in progress.

Future ideas currently include an independent game and a multi-agent workspace.

## Stack

- Plain HTML, CSS and JavaScript — no framework and no backend
- Hosted on **Cloudflare Pages**, automatically deployed from `main`
- `www` redirects to the canonical apex domain

## Privacy and analytics

- Google Analytics 4 remains blocked until a visitor explicitly allows analytics.
- The consent choice can be changed at any time from **Cookie settings** in the footer.
- The public privacy notice is available at `/privacy`.
- Review `PRIVACY_MAINTENANCE.md` before every change that affects data, analytics, cookies, forms, contribution methods or providers.
- Marketing tracking, Google Ads, Google Signals and advertising personalization are not used.
- Custom events measure only anonymous interactions with the support section, payment methods and sharing controls. They do not report payment details or completed contributions.

## Optional support

Voluntary personal support is available through PayPal, card, Revolut and bank transfer. It is not an investment, charitable donation or purchase, and nothing is promised in return. Crypto remains hidden until wallet access and networks are verified.

## Operations

- Production monitoring is implemented in `.github/workflows/production-monitor.yml` and `scripts/check-production.mjs`.
- Account-security, recovery and monitoring work is tracked in `SECURITY_MAINTENANCE.md`.
- Privacy-related maintenance and the future 90-day submission cleanup are tracked in `PRIVACY_MAINTENANCE.md`.

## Public pages

- `index.html` — projects, story, ideas and optional support
- `wall-of-dreamers.html` — visitor dream submissions
- `privacy.html` — privacy and consent information
- `CRYPTO_WALLETS.md` — disabled crypto-address register and re-enable checklist
