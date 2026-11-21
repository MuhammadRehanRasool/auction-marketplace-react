# Ecomm Figma: Auction Marketplace Frontend

A responsive frontend for an online auction marketplace. I built it in React from a Figma design. The pages cover browsing live auctions and discounted products, viewing a product's bid details, and signing in or registering. All product data is static mock data, so the app does not need a backend to run.

## Pages

| Route | Page | What it shows |
|-------|------|---------------|
| `/` | Home | Hero section, product carousels (Swiper), and calls to action |
| `/bidGallery` | Bid Gallery | Grid of auction items with current/minimum bid and a live countdown to bid expiry |
| `/categories` | Categories | Search bar, category tabs, discount-range slider, and a grid of discounted products (old/new price, discount badge) |
| `/product/*` | Product Page | Product description, higher/minimum/current bid, time remaining, quick-bid button, share links, offers table, and related products |
| `/login` | Login | Login form with a "forgot password" mode and inline validation messages |
| `/register` | Register | Personal-information form (name, username, email, company, US state, password confirmation) with client-side validation |

Unknown routes fall back to the Home page.

## Reusable components

- **Navbar**: brand logo, page links, and Login/Register buttons
- **Footer**: site footer with links
- **ProductCard**: one card for auction items and discounted products. It shows a favourite toggle, tooltips, and a per-second countdown built with `moment`.

## Tech stack

- React 18 (Create React App, `react-scripts` 5)
- React Router v6
- MUI 5 (`@mui/material`, `@mui/icons-material`) with Emotion
- Swiper and react-multi-carousel for the sliders
- Sass (SCSS) for styling, plus Bootstrap 5 loaded from a CDN for the grid and utility classes
- Moment.js for the countdown timers

## Project structure

```
public/            static assets (icons, product images, index.html, Netlify _redirects)
src/
  App.js           route definitions
  CONSTANT.js      shared helpers (inline messages, cookies, base URLs)
  components/      Navbar, Footer, ProductCard
  views/           Home, BidGallery, Categories, ProductPage, Login, Register
  scss/            per-page and per-component stylesheets
  fonts/           Gilroy font files
```

## Getting started

Requirements: Node.js 16+ and npm.

```bash
npm install
npm start
```

The app runs at http://localhost:3000.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the development server |
| `npm run build` | Create a production build in `build/` |
| `npm test` | Run tests in watch mode |
| `npm run eject` | Eject from Create React App (one-way) |

## Notes

- This is a frontend only. The login and register forms validate input but do not call an API yet.
- `public/_redirects` sends every route to `index.html`, so client-side routing works on Netlify.
