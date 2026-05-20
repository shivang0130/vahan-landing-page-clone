# VAHAN Landing Page Clone

Modern multilingual recreation of the VAHAN citizen services landing page built using React, TypeScript, Zustand, Tailwind CSS, and react-i18next.

## Tech Stack

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- react-i18next
- Framer Motion

## Features

- Responsive UI
- Working dropdown navigation
- Multilingual support
- Dynamic font switching
- Mobile navigation drawer
- Reusable component architecture
- Accessibility improvements
- Modernized government portal UI

## Responsiveness Approach

The application uses a responsive component-based architecture powered by Tailwind CSS breakpoints. Layouts adapt progressively across mobile, tablet, and desktop devices using flexible grids and responsive spacing systems.

## State Management Approach

Zustand was used for lightweight global state management, specifically for:
- navigation dropdown state
- mobile drawer state
- language selection

This avoided unnecessary prop drilling while keeping the architecture scalable and maintainable.

## Multilingual Strategy

react-i18next was implemented using locale-based translation JSON files. The architecture keeps UI components language-agnostic and scalable for additional languages.

## Dynamic Fonts Strategy

Dynamic font switching was implemented based on selected locale:
- Inter → English
- Noto Sans Devanagari → Hindi

This ensures proper readability and typography consistency across languages.

## Code Structure

```txt
src/
├── components/
├── constants/
├── layouts/
├── locales/
├── pages/
├── store/
├── styles/
├── utils/
```

## Installation

```bash
npm install
npm run dev
```

## Deployment

Deployed using Vercel.

## Commit History

The project was developed using iterative feature-based commits following a modular frontend engineering workflow.
