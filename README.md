# Little Lemon Restaurant

A responsive React web app for the Little Lemon restaurant capstone project. Visitors can explore the restaurant, view weekly specials, and reserve a table.

## Features

- Responsive desktop and mobile navigation.
- Restaurant home page with hero, specials, testimonials, and about content.
- Reservation form with date, time, guest-count, and occasion validation.
- Available reservation times update when the selected date changes.
- Confirmation page after a successful reservation submission.
- Accessible labels, keyboard-friendly controls, and live validation or submission feedback.

## Tech stack

- React 19
- React Router
- Vite
- Vitest and Testing Library
- ESLint

## Prerequisites

Install Node.js 20 or later. npm is included with Node.js.

## Setup

```bash
git clone <your-repository-url>
cd nj-cap-app
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run test` | Run the unit tests once. |
| `npm run lint` | Check the code with ESLint. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

## Reservation API

The app loads the Coursera capstone reservation helpers from `index.html`. `fetchAPI` supplies available times and `submitAPI` confirms a booking. If the API is unavailable or rejects a request, the form keeps the user on the reservation page and shows a clear error message.

## Testing

The test suite covers available-time initialization and updates, form validation, empty availability, valid submission, and reservation submission error feedback.
