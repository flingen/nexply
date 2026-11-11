# Nexply website

Compliance · Risk · Legal. Next.js 16, React 19, Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub and import the repo into Vercel. No environment variables are needed.

## Editing content

All page text lives in `content/site.ts`:

| What | Where |
|---|---|
| Phone, email, address, WhatsApp number | `contact` |
| Navigation and footer | `nav`, `footer` |
| Page titles and search descriptions | `seo` |
| Homepage | `home`, `lifecycle`, `faq`, `comparison` |
| Practice pages | `compliancePage`, `riskPage`, `legalPage` |
| Other pages | `sectorsPage`, `marketsPage`, `whyPage`, `consult` |

The Privacy Policy and Terms are in `content/legal.tsx`.

## Consultation form

"Send on WhatsApp" opens WhatsApp to +234 810 890 6104 with the visitor's details filled in. "Send by email" opens their email app addressed to hello@nexply.xyz. There is no backend to maintain.

## Brand

- Colours are defined at the top of `app/globals.css`. Each practice has its own: blue (Compliance), teal (Risk), gold (Legal).
- Headlines use Newsreader. Body text uses Geist.
- The shield mark is `public/nexply-shield.png`. Replace `components/ui/Wordmark.tsx` when the new logo is ready.

## Redirects

Old links still work: `/licensing` → `/legal`, `/how-it-works` and `/approach` → `/why-nexply`, `/about` → `/`, `/book-a-call` and `/contact` → `/free-consultation`.
