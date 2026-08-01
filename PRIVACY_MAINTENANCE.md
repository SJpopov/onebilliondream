# Privacy maintenance checklist

The public privacy notice is `privacy.html`. The site is under active development, so this file is a mandatory review reminder rather than a one-time task.

## Review `privacy.html` whenever any of these change

- Analytics provider, Measurement ID, events, parameters, consent behaviour or GA4 retention.
- Cookies, local storage keys, their purpose or their lifetime.
- Advertising, Google Signals, personalization, remarketing or a Google Ads connection.
- Forms, email submissions, Wall of Dreamers publishing or retention workflow.
- PayPal, Revolut, bank transfer, crypto or any other contribution method.
- Hosting, CDN, security, email or other provider that can process visitor data.
- Any collection of names, email addresses, payment information, identifiers or user-generated content.
- Controller identity, privacy contact email, supervisory authority or applicable legal requirements.

## Before publishing a data-related change

1. Compare the actual code and provider settings with every section of `privacy.html`.
2. Update purposes, data categories, providers, legal grounds and retention periods where necessary.
3. Update the effective/last-updated date in `privacy.html`.
4. Confirm the cookie banner and Cookie settings still match the policy.
5. Test that optional services remain blocked before the required consent.
6. Verify the Privacy link is reachable from every public page.

## Current baseline — 1 August 2026

- Controller: Stefan Popov, operator of One Billion Dream.
- Privacy contact: dreambig@onebilliondream.com.
- GA4: consent required; event data retention 14 months.
- Advertising, Google Signals and advertising personalization: not used.
- Unpublished Wall of Dreamers submissions: target deletion within 90 days.
- Crypto contributions: temporarily hidden and disabled.

## Pending automation — Wall of Dreamers retention

This is a recorded future task and is **not automated yet**.

Build a safe scheduled cleanup for Wall of Dreamers submission emails so that unpublished submissions older than 90 days are handled automatically.

Required safeguards before enabling it:

1. Create a dedicated Gmail filter and label used only for Wall of Dreamers submissions.
2. Define a separate label or status for published submissions and messages still under review.
3. Run the cleanup in report-only mode first and verify every matched message manually.
4. Exclude published, active, disputed or legally required records.
5. Move eligible messages to Trash first; do not permanently delete them directly.
6. Keep a simple dated cleanup report without copying submission contents.
7. Test recovery from Trash before scheduling the live cleanup.

Until this automation is implemented and verified, review and remove unpublished submissions manually in line with the public 90-day target.

This checklist supports maintenance but is not a substitute for professional legal advice when the project, data use or jurisdictions materially expand.
