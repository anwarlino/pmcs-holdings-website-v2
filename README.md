# PMCS Holdings Website V2

Phase 1 establishes the PMCS Holdings website foundation using Next.js, TypeScript, Tailwind CSS, static export, modular components, locale-driven content and cautious claim-controlled messaging.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for HostGator shared hosting

## Routes

- `/` serves English homepage content and clear language links.
- `/en` serves English localized content.
- `/th` serves Thai localized content.
- `/ar` serves Arabic localized content with RTL direction.

## Content rules

All visible website copy should come from locale files in `content/locales`.

Claim-controlled language should remain cautious. Do not claim secured financing, guaranteed returns, issued carbon credits, binding offtake, regulatory approval, official partnerships or completed operating scale unless documented and approved.

## Static export

Run the production build with:

```bash
npm run build
```

The static export output is generated in `out/`. The contents of `out/` can later be uploaded directly to HostGator `public_html`.

## Phase 1 asset approach

Final logo and imagery are not required yet. Placeholder folders are available at:

- `public/assets/logo`
- `public/assets/images`

## Legacy static reference

The previous standalone HTML/CSS/JS implementation has been preserved for reference in `legacy-static/`.
