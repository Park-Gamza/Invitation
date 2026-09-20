# Invitation

A static mobile wedding invitation with Korean and Japanese language support.

The project is built with plain HTML, CSS, and JavaScript, with no framework or build step required. It can be deployed directly to GitHub Pages and presents the wedding details, photo gallery, directions, and guestbook on a single mobile-friendly page.

## Overview

This responsive web page is designed for guests from Korea and Japan. Visitors can switch between Korean and Japanese from the top of the page. Dates, labels, instructions, buttons, and guestbook entries are displayed in the selected language.

The guestbook uses Google Sheets and Google Apps Script instead of a separate database server. Messages are stored with their language and shown only on the corresponding Korean or Japanese page.

## Features

- Korean and Japanese language switching
- Mobile-first responsive design
- Wedding calendar and countdown
- Circular photo gallery with thumbnails
- Map link, address copying, and transportation information
- Guestbook powered by Google Sheets
- Language-specific guestbook messages
- Bank account information and copy support
- Native mobile sharing

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Apps Script
- Google Sheets
- GitHub Pages

## Project Structure

```text
.
├── index.html                 # Page structure
├── css/style.css              # Responsive styles
├── js/main.js                 # Wedding data and interactions
├── assets/images/             # Gallery images
├── google-apps-script/Code.gs # Guestbook API
└── README.md
```

## Local Development

No installation is required. Open `index.html` directly in a browser or run a local static web server.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Configuration

Edit the wedding details and localized text in `js/main.js`. Add gallery photos to `assets/images/` and update their paths in `index.html`.

To enable the guestbook, add `google-apps-script/Code.gs` to an Apps Script project linked to a Google Sheet and deploy it as a web app. Set the generated URL ending in `/exec` as `guestbookEndpoint` in `js/main.js`.

## Live Site

- Korean: [https://park-gamza.github.io/Invitation/](https://park-gamza.github.io/Invitation/)
- Japanese: [https://park-gamza.github.io/Invitation/ja/](https://park-gamza.github.io/Invitation/ja/)
