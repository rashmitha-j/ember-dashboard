# Ember Dashboard

A sales and revenue operations dashboard, built as a collaborative project. It tracks pipeline, deals, customers and team performance in a single, clean interface.

**Live demo:** [ember-dashboard-seven.vercel.app](https://ember-dashboard-seven.vercel.app)

<!--
Add a screenshot here once you have one:
1. Open the live demo, take a screenshot of the Overview page.
2. Save it as `screenshot.png` in a `public/` or `docs/` folder in the repo.
3. Uncomment the line below and update the path.

![Ember Dashboard Overview](./docs/screenshot.png)
-->

## Features

- **Overview** — key metrics (revenue, conversion rate, active deals, new leads) with trend charts
- **Pipeline** — deal stages with progress and value breakdowns
- **Deals** — a sortable table of active and closed deals
- **Customers** — account list with contact details
- **Team** — rep performance against quota
- **Forecasting** — projected revenue by scenario (base / best case)
- **Reports** — summary views for exporting or sharing
- **Settings** — profile, role, timezone and currency preferences
- Light and dark theme support

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) with React 19 and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components (Radix UI primitives)
- [Recharts](https://recharts.org/) for data visualization
- `react-hook-form` + `zod` for form handling and validation
- `next-themes` for light/dark mode
- Deployed on [Vercel](https://vercel.com/), with Vercel Analytics

## Getting started

```bash
git clone https://github.com/rashmitha-j/ember-dashboard.git
cd ember-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
app/                     # Next.js App Router entry points, layout, global styles
components/dashboard/    # Sidebar, header, and the 8 dashboard sections
components/ui/           # shadcn/ui primitives (buttons, cards, dialogs, etc.)
hooks/                   # Shared React hooks
lib/                     # Utility functions
public/                  # Static assets and icons
```

## Notes

- All dashboard data (deals, customers, team members) is sample data defined inside the components — there's no backend or database yet.
- Theme colors live in `app/globals.css` under the `--accent` CSS variable.

## Credits

Built together with a friend as a collaborative project.

## License

No license has been set yet — all rights reserved by default. Add an [MIT](https://choosealicense.com/licenses/mit/) or other license here if you want others to reuse the code.
