# JewelHub Static Website

Professional single-page marketing/portfolio website for JewelHub, a jewelry shop management software product by Biplob Devkota.

## Files

- `index.html` - semantic single-page website content
- `style.css` - responsive dark theme, layout, animations, and UI styling
- `script.js` - mobile nav, scroll reveal, demo tabs, and client-side form validation
- `_headers` - optional Cloudflare Pages headers

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repository.
2. In Cloudflare Dashboard, go to **Workers & Pages**.
3. Select **Create application** then **Pages**.
4. Connect the GitHub repository.
5. Use these build settings:
   - Framework preset: `None`
   - Build command: leave empty
   - Output directory: `/`
6. Deploy.

## Before Production

- Replace placeholder logo/favicon and Open Graph image.
- Replace screenshot placeholders in the demo section with real product screenshots.
- Replace placeholder pricing, team photos, stats, email, and phone number.
- Wire the contact form to Formspree, Cloudflare Pages Functions, or another form service.
