# Healthcare AI Product Portfolio — Cinematic Rebuild

A premium React + TypeScript portfolio for AspireX LLC showcasing eight interactive healthcare AI product concepts.

## Run locally

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

## Connect live demo URLs

Edit `src/data/projects.ts` and paste each deployed URL into the matching `demoUrl` field.

```ts
demoUrl: 'https://your-demo-url.example'
```

When the field is empty, the UI intentionally shows `Demo link coming soon` / `Live demo URL ready to connect` rather than rendering a broken link.

## Replace / add screenshots

Screenshots are centralized in `src/data/projects.ts`:

```ts
screenshots: {
  hero: '/projects/example.png',
  secondary: ['/projects/example-secondary.png'],
}
```

Current real interface screenshots are included for MedSafe AI, VirtualWard AI, HealthPopulation AI, HealthConnect AI and HealthGuard AI. CareOps AI, Clinician Copilot AI and SmartReferral AI use designed product placeholders until real screenshots are added.

## Routes

- `/`
- `/projects/careops-ai`
- `/projects/clinician-copilot-ai`
- `/projects/smartreferral-ai`
- `/projects/medsafe-ai`
- `/projects/virtualward-ai`
- `/projects/healthpopulation-ai`
- `/projects/healthconnect-ai`
- `/projects/healthguard-ai`

## Design system

The rebuild uses cinematic dark/light section rhythm, layered product interfaces, editorial bento composition, real screenshots, interactive filters, capability matrix, healthcare ecosystem mapping, sticky process storytelling, Responsible AI flow, project lightbox and case-study detail pages.

Portfolio demonstrations use synthetic data and simulate healthcare workflows. They are not production clinical systems.
