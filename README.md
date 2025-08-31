# Auto Glass Alpha (Isolated Copy)

An isolated, professional, responsive website copy for Auto Glass Center (Alpha). Built with HTML, CSS, and JavaScript. This repository is intentionally separate from the production "Auto Glass Quick" project to prevent accidental deployments.

## Features
- Modern, mobile-friendly design
- Instant quote request form
- Click-to-call and Google Maps integration
- Services overview and customer reviews
- Consistent, branded button styles
- SEO and accessibility best practices

## Project Structure
```
AutoGlassAlpha/
├── index.html        # Homepage
├── quote.html        # Quote request page
├── contact.html      # Contact page
├── services.html     # Services overview
├── styles.css        # Main stylesheet
├── script.js         # JavaScript functionality
├── favicon.svg       # Favicon
└── README.md         # Project info
```

## Usage
1. Clone (or copy) this repository locally
2. Open `index.html` in your browser
3. Edit content as needed for improvements

## Safety and Version Control
- This repo is initialized with a fresh Git history and no remotes.
- Do not add production remotes (e.g., Amplify) to avoid accidental pushes.
- Suggested local protection: add a pre-push hook to block pushes by default.

### Optional: Pre-push hook (blocks all pushes)
Create `.git/hooks/pre-push` with:
```
#!/bin/sh
echo "Pushes are disabled for Auto Glass Alpha. Remove this hook to enable." >&2
exit 1
```
Then make it executable: `chmod +x .git/hooks/pre-push`.

## Deployment
- For alpha testing, deploy to a separate environment (e.g., a new Amplify app, Vercel, or Netlify) distinct from production.

---
© 2025 Auto Glass Center. All rights reserved. 