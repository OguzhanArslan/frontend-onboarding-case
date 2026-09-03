# Onboarding Frontend Case

An onboarding screen built to match the provided Figma design — responsive, mobile-first, and cross-browser. Users switch between onboarding steps through an animated tab bar, with each tab presenting its own banner, illustration, and stickers.

**Live demo:** https://onboarding.oguzhanarslan.me/

## Tech stack

- **React 18** + **TypeScript**
- **Vite** for dev server and build
- **SCSS Modules** for styling
- **ESLint**, **Stylelint**, and **Prettier** for linting and formatting

## Getting started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Linting & formatting

Run all linters (ESLint, TypeScript, Stylelint):

```sh
npm run lint
```

Format the code (Prettier + Stylelint autofix):

```sh
npm run format
```

## Project structure

```
src/
├── App.tsx                 # Composes the Tabs + Banner for each onboarding step
├── main.tsx                # App entry point
├── styles.scss             # Global styles
├── assets/
│   ├── fonts/              # SF Pro Display font files
│   ├── icons/              # Tab icons (svg)
│   ├── images/             # Banner illustrations
│   └── scss/               # Shared styles: variables, breakpoints, fonts, reset
├── components/
│   ├── Banner/             # Step banner: title, description, image, stickers
│   ├── Button/             # Base button
│   ├── Icon/               # Icon wrapper
│   ├── PillButton/         # Animated pill CTA with progress ring
│   ├── Stickers/           # Decorative stickers layered over banners
│   └── Tabs/               # Compound Tabs component (Root, List, Tab, Panels, Panel)
│                           #   with context, keyboard navigation, and helpers
└── data/
    └── tabs.ts             # Tab configuration (labels, content, icons, stickers)
```

## Design reference

Figma design:

```
https://www.figma.com/file/fqq3IGqxAiIUEItAWHZ54W/Frontend-Case-(HubX)?type=design&node-id=896%3A263&mode=design&t=7TvYeaXudwa3TGy5-1
```
