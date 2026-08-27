# Little Lemon Capstone

A React implementation of the Little Lemon restaurant capstone project. The app includes a responsive semantic homepage, accessible navigation, weekly specials, testimonials, restaurant information, a functional reservation form, API-based available times, confirmation routing, validation and unit tests.

## Requirements

- Node.js 18+ or 20 LTS
- npm
- Visual Studio Code (recommended)

## Install

```bash
npm install
```

## Run

```bash
npm start
```

Then open http://localhost:3000.

## Test

```bash
npm test
```

Press `a` to run all tests if Jest starts in watch mode.

## Production build

```bash
npm run build
```

## Main routes

- `/` - Home page
- `/about` - About
- `/menu` - Menu
- `/booking` - Reservation form
- `/confirmed-booking` - Reservation confirmation
- `/order-online` - Online ordering placeholder
- `/login` - Login placeholder

## Accessibility

The project uses semantic HTML, labels linked to controls with `htmlFor`/`id`, required field attributes, a skip link, descriptive image alternative text, navigation labels, keyboard-focus styling and live error feedback.

## Booking API

The Coursera capstone API script is loaded in `public/index.html`. `src/utils/api.js` wraps its global `fetchAPI` and `submitAPI` functions so they can be mocked in unit tests.
