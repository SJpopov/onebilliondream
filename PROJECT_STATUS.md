# One Billion Dream — Project Status

Last updated: 2026-08-09

This file is the handoff reference for future maintainers and AI agents. Read it together with `README.md`, `SECURITY_MAINTENANCE.md`, `PRIVACY_MAINTENANCE.md` and `CRYPTO_WALLETS.md` before making site-wide changes.

## Current direction

One Billion Dream is now the public home for independent projects, practical tools, experiments and future ideas built by `@SJpopov`. The old homepage narrative centred on one million people donating one dollar is no longer the current public positioning.

Current featured work:

- PC Audit Copilot — working prototype; validation ongoing.
- Insurance Workflow Automation — private professional project in development.
- Game Mission Control — working automation, monitoring and recovery system.
- Knowledge System — learning and connected-notes project in progress.

Future ideas currently shown are an independent original game and a multi-agent workspace.

## Legacy backup — do not delete without explicit approval

The exact final site state before the project-focused redesign is preserved in the GitHub branch:

- Branch: `archive/legacy-fundraising-site-2026-08-09`
- Source commit: `27fd86ad751b43c8c42611dadd735c84a8243fde`
- This branch contains the former fundraising copy, progress display, donation-focused metadata and the original hidden-game placement.

The legacy snapshot is deliberately kept outside `main` so Cloudflare Pages does not publish it as an additional public route. Do not delete the branch, rewrite it or copy its public-facing fundraising metadata back into `main` unless the project owner explicitly decides to restore that direction.

## Hero video — preserve this behaviour

- Desktop and mobile use the same compressed MP4: `857251-hd_1620_1080_25fps.mp4`.
- Do not add an artificial star grid or a full-screen dark overlay. The video contains its own natural stars and is already dark enough for the text.
- The two `.bg-video` elements crossfade for 1.4 seconds before the active copy ends. This hides the different colours at the first and last frames.
- The outgoing copy must remain visible until `waitForDecodedVideoFrame()` confirms that the standby copy has produced a real frame. Removing this guard can create a black flash during later cycles.
- Do not replace the crossfade with the native `loop` attribute: a native loop creates a visible colour jump.
- The implementation intentionally follows the proven pre-redesign two-video polling approach, with a guard that still recovers if the browser reaches the ended state.
- After changing hero markup, CSS or video JavaScript, test the live page beyond 30 seconds. Verify at least two full cycles and confirm that the background neither stops, turns black nor jumps directly between the final warm frame and the initial blue frame.

## Hidden game and contribution controls

- The hidden game remains at `/play` and is linked by the small person icon in the footer.
- `/play` must remain `noindex, follow` and must not be added to `sitemap.xml`.
- Crypto support and its button remain hidden until wallet access and supported networks are verified. See `CRYPTO_WALLETS.md`.
- PayPal, card, Revolut and bank transfer remain voluntary personal-support options, not investments, purchases or charitable donations.

## Privacy and analytics

- GA4 measurement ID: `G-YH9CQQEZ2R`.
- Analytics loads only after explicit analytics consent.
- Consent Mode v2 defaults advertising storage, advertising user data and ad personalisation to denied.
- Google Signals, Google Ads and advertising personalisation remain disabled.
- GA4 event-data retention is 14 months.
- The `payment_method` event parameter is registered as the event-scoped custom dimension `Payment method`.
- Search Console domain property `onebilliondream.com` is linked to the GA4 stream `ONEBILLION`.

Review `PRIVACY_MAINTENANCE.md` whenever forms, analytics, cookies, providers, contribution methods or data handling change.

## Public metadata and discovery

Current GitHub repository metadata:

- Description: `Independent projects, practical tools and experiments built openly by @SJpopov.`
- Homepage: `https://onebilliondream.com`
- Topics: `ai-tools`, `automation`, `cloudflare-pages`, `independent-projects`, `portfolio`, `project-showcase`, `security-tools`, `static-site`.

Current public metadata is aligned across `index.html`, Open Graph, Twitter cards, JSON-LD, `README.md`, `llms.txt`, `og-image.png`, `wall-of-dreamers.html` and `sitemap.xml`.

Google may temporarily show the former fundraising title and description until it recrawls the site. The homepage and `/wall-of-dreamers` were submitted for priority recrawling in Search Console on 2026-08-09. The exact-name Linktree result is unrelated to this project and must not be added to `sameAs` or treated as an official profile.

Whenever the site's purpose, featured projects or public copy changes, review and update all of the following together:

1. Page title, meta description, Open Graph, Twitter card and JSON-LD in `index.html`.
2. `README.md` and `llms.txt`.
3. `og-image.svg` and the rendered `og-image.png` when the visible social-card message changes.
4. GitHub description, homepage and topics.
5. `sitemap.xml` dates and routes.
6. Search Console recrawl requests for materially changed indexed pages.
7. Production monitor markers when expected public behaviour changes.

## Operations

- Cloudflare Pages deploys automatically from `main`.
- `.github/workflows/production-monitor.yml` runs every 15 minutes and after relevant pushes.
- `scripts/check-production.mjs` verifies public routes, HTTPS, security headers, canonical metadata, privacy controls, the hidden crypto state, the hidden game and the two-video hero crossfade markers.
- GitHub Actions failure notifications are managed by the daily monitoring task and the Gmail label `One Billion Dream — Monitoring`.
