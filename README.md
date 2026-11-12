# Autoricambi Saitta

Website for a car-parts shop in Piazza Armerina (Sicily, Italy). Built and deployed for a real client.

**Live:** https://www.autoricambisaitta.it

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · deployed on Vercel

## What it does

- **Part request flow** — customers describe the part they need (brand, model, year) through a form that opens WhatsApp with the message pre-filled, so the shop gets a structured request instead of a vague phone call.
- **GDPR cookie management** — consent banner plus a preferences manager the user can reopen at any time.
- **SEO** — per-page metadata and canonical URLs (`lib/seo.ts`), Open Graph image, `robots.ts`, generated `sitemap.ts` and `AutoPartsStore` structured data, aimed at local search for the shop's catchment area.
- **Static content pages** — categories, about, contact, privacy and cookie policy, Italian 404 page.

## Structure

```
app/          App Router pages (home, cerca-ricambio, categorie, chi-siamo, contatti, policies)
components/   Header, Footer, forms, cookie banner and manager, reviews, analytics
lib/          constants.ts — all business data (name, address, hours, phone, WhatsApp) in one place
              seo.ts — site URL, per-page metadata and structured data
```

All client-specific data lives in `lib/constants.ts`. This is what makes the codebase reusable: a second shop means a new configuration file, not a new project.

## Running locally

```bash
npm install
npm run dev
```
