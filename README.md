# Performance-Driven Gym

A modern, responsive gym website built with React 19 and TypeScript. Marketing and class-booking site for **Primal Training** — a strength & conditioning gym focused on community and results.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite)

---

## Features

- **3-page SPA** — Home, About, Reserve Your Spot
- **Responsive design** — mobile-first with dedicated hamburger menu
- **Optimized images** — WebP format with sm/md/lg responsive variants
- **Smooth animations** — powered by Motion 12
- **Centralized content** — all copy lives in `src/utils/content.tsx` for easy updates
- **Fully typed** — TypeScript interfaces for all content shapes

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Language | TypeScript 6.0 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 4.3 |
| Animations | Motion 12 |
| Build Tool | Vite 8.1 |
| State | React Context API |
| Linting | ESLint 10 + TypeScript ESLint |

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Main wrappers
│   ├── Navigation/      # Desktop nav + MobileMenu
│   ├── Icons/           # Hamburger, Close icons
│   └── Community/       # Community section components
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   └── ReserveYourSpotPage.tsx
├── contexts/            # MobileMenu context + provider
├── utils/
│   ├── content.tsx      # All site content / copy
│   └── contentTypes.tsx # TypeScript interfaces
└── App.tsx              # Router + layout setup
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Pages

### Home
Hero section → Expert-guided training cards → Community highlights → Join CTA

### About
Brand story → Vision statement → Facility overview → Join CTA

### Reserve Your Spot
Training classes grid (Strength, Conditioning, Community) → Personal Training booking info

---

## Customization

All site copy, navigation links, and section content is centralized in `src/utils/content.tsx`. Update that file to change text without touching component logic.

Custom theme tokens are defined in `src/index.css` via Tailwind's `@theme` directive:

```css
--color-primary: #808cfd;     /* brand blue */
--color-secondary: #e9ecff;   /* light purple */
```

---

## License

MIT
