# PMCS Holdings Website Agent Instructions

## Project scope
- This repository contains the PMCS Holdings website.
- The site must remain static-export-ready for HostGator shared hosting.
- Final deployment output is the Next.js `out/` directory; contents are intended to be uploaded directly to HostGator `public_html` later.

## Technology requirements
- Use Next.js, TypeScript, and Tailwind CSS.
- Use modular React components.
- Avoid backend/runtime server features unless explicitly requested.
- Do not add API routes, middleware, server actions, database integrations, authentication, reCAPTCHA, Cookiebot, Playwright, Electron, or deployment automation unless explicitly requested.

## Internationalization
- Required public routes: `/`, `/en`, `/th`, `/ar`.
- `/` should serve English homepage content and include clear language links to `/en`, `/th`, and `/ar`.
- Arabic must render with RTL direction.
- All visible text, including labels, CTA text, alt text, metadata copy, aria labels, and compliance notes, must come from locale files.

## Claim control
- Keep language cautious and verification-led.
- Do not overclaim financing, carbon credits, offtake, partnerships, regulatory approvals, certifications, or operating scale.
- Use language such as planned, intended, under development, subject to verification, subject to approval, and subject to final documentation where appropriate.

## Assets
- Phase 1 uses placeholders only.
- Approved final logo and imagery are not required yet.
