# Security, recovery and monitoring backlog

This file records future operational-security work for One Billion Dream. None of the account changes or automations below are enabled merely by documenting them here.

## 1. Account and domain security audit — pending

### Primary email account

- Confirm 2FA or a passkey is enabled.
- Store current recovery codes in a secure location separate from the logged-in device.
- Verify recovery email and phone details.
- Review active sessions, forwarding rules, connected applications and recent security activity.

### Domain registrar

- Confirm 2FA or a passkey is enabled.
- Confirm automatic renewal, valid payment details and renewal notifications.
- Enable and verify registrar/domain lock.
- Verify the account and domain recovery email.
- Confirm nameservers are expected and DNSSEC is configured correctly.

### GitHub

- Confirm 2FA/passkey and offline recovery codes.
- Review active sessions, authorized OAuth/GitHub Apps, SSH keys and personal access tokens.
- Review repository collaborators and permissions.
- Review protection for `main`, including deletion/force-push protection and an appropriate deployment workflow.

### Cloudflare

- Confirm 2FA/security key and offline recovery options.
- Review active sessions, account members and roles.
- Review API keys/tokens; remove unused credentials and keep permissions minimal.
- Review Audit Logs for unexpected changes.
- Verify Pages production branch, custom domains, DNS records, DNSSEC and deployment notifications.

## 2. Recovery plan — pending test

The repository and Cloudflare Pages deployment history provide two recovery paths.

### Fast emergency recovery

1. Open the One Billion Dream project in Cloudflare Pages.
2. Open **Deployments** and identify the most recent deployment known to work correctly.
3. Use **Rollback to this deployment** and confirm the live site is restored.
4. Verify the home page, contribution controls, `/privacy`, `/wall-of-dreamers`, security headers and consent behaviour.

Cloudflare rollback restores service quickly, but it does not change the source code in GitHub.

### Permanent source recovery

1. Identify the Git commit that introduced the problem and the last known good commit.
2. Create a normal Git revert commit; do not erase or rewrite `main` history.
3. Push the revert commit to `main` so Cloudflare deploys source code matching the recovered site.
4. Run the production regression checks again and record the incident and fix.

### Recovery safeguards

- Never delete the repository or Cloudflare project as a recovery step.
- Never use a destructive Git reset on shared production history.
- Keep GitHub recovery codes, Cloudflare recovery access and registrar recovery access separate.
- Perform a controlled rollback drill after this plan is reviewed, then repeat after major hosting changes.

## 3. Monitoring plan — implemented 2 August 2026

Start with alert-only monitoring. Do **not** enable automatic rollback until false positives and recovery behaviour have been tested.

### Active first version

The GitHub Actions workflow `.github/workflows/production-monitor.yml` runs approximately every 15 minutes, after relevant pushes to `main`, and on manual request. Its checks are implemented in `scripts/check-production.mjs` and cover:

- `https://onebilliondream.com/` returns HTTP 200 and contains the expected site marker.
- `/privacy`, `/wall-of-dreamers`, `/sitemap.xml` and `/robots.txt` are reachable.
- HTTPS is used and the strict Content-Security-Policy header is present.
- The canonical URL is correct.
- The crypto contribution button remains hidden until deliberately re-enabled.
- The public privacy page and consent controls still exist.

If a check fails, the workflow fails with a short diagnostic. GitHub Actions notifications must remain configured to email the repository owner for failed workflows. A manual rerun should confirm the failure before recovery action is taken.

The workflow has read-only repository permissions, uses no secrets, and never performs an automatic rollback.

### Optional second signal

If available for the Cloudflare account and plan, configure a Cloudflare Health Check and email notification. Keep it independent from the GitHub check so that one monitoring provider can still alert when the other has a problem.

### Monitoring maintenance

- Review successful monitoring history monthly while the site is actively changing.
- Update checks when routes, security headers, consent, contribution methods or hosting change.
- Test one deliberate harmless failure before relying on notifications.
- Record incidents without storing visitor data or secrets in workflow logs.

## 4. Current recovery assets

- Canonical source and history: GitHub repository, `main` branch.
- Automatic production deployments: Cloudflare Pages.
- Previous successful production deployments: Cloudflare Pages deployment history.
- Local working copy: `D:\Projects\onebilliondream`.
- Privacy-change checklist: `PRIVACY_MAINTENANCE.md`.

Review this document whenever ownership, hosting, repository, domain, monitoring or deployment behaviour changes.
