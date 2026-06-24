# TextUtils React App

A small React application for manipulating text and inspecting simple statistics (word/character counts, trimming spaces, converting case, copying text, and previewing results).

## Features

- Convert text to uppercase / lowercase
- Remove extra spaces
- Copy text to clipboard
- Clear text
- Show word and character count and live preview
- Simple light/dark theme toggle (if implemented)

## Requirements

- Node.js 14+ and npm (or yarn)

## Installation

1. Clone or download the repository.
2. Install dependencies:

```bash
cd TextUtilsReactApp
npm install
```

## Running locally

Start the development server:

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Available scripts

- `npm start` — Runs the app in development mode.
- `npm test` — Runs tests.
- `npm run build` — Builds the app for production.

## Project structure

- public/ — Static assets and index.html
- src/ — Source code
  - components/ — `Navbar.js`, `TextForm.js`, and styles
  - App.js — Root component

## Usage

Type or paste text into the text area in the app, then use the available buttons to transform and analyze the text. The preview updates live.


## License

MIT
