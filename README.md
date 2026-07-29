# One Billion Dream

**One person. One dream. One dollar.**

The first milestone is simple: one million people giving $1 each. That is the first step toward the long-term billion-dollar dream. No charity claim, no product, no promises — just an honest ask and simple math.

🌐 **[onebilliondream.com](https://onebilliondream.com)**

## What it is

A static site with a single honest message: help one person take the first step toward an impossible dream by giving $1. The first milestone is $1 million; the long-term dream is $1 billion. Voluntary personal contributions are accepted via PayPal, Revolut, and bank transfer (IBAN). Crypto contributions are temporarily disabled while wallet access and networks are verified.

## Stack

- Plain HTML / CSS / JavaScript — no framework, no backend
- Hosted on **Cloudflare Pages**, auto-deploys on every push to `main`
- `www` → apex redirect via `_redirects`

## Privacy and analytics

- Google Analytics 4 is blocked until a visitor explicitly allows analytics.
- The consent choice can be changed at any time from **Cookie settings** in the footer.
- Marketing tracking is not used; Google Ads and Google Signals are not connected.
- Custom events measure only anonymous site interactions (contribution-section views, payment-method selections, and shares). They do not report payment details or completed contributions.

## Pages

- `index.html` — the main page (the story + contribution methods)
- `wall-of-dreamers.html` — a wall where supporters leave their name and dream
- `CRYPTO_WALLETS.md` — the disabled crypto-address register and safe re-enable checklist

---

*No promises were harmed in the making of this site.*
