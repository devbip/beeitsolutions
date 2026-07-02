# BEE IT Solutions Static Website

Professional single-page company website for BEE IT Solutions, featuring Jewel Hub as the team's showcased jewelry shop management software project.

## Files

- `index.html` - semantic single-page website content for the company and Jewel Hub project
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

- Add final Open Graph image and canonical URL metadata.
- Replace styled demo previews with real Jewel Hub product screenshots when available.
- Replace contact-for-pricing copy when packages are finalized.
- Wire the contact form to Formspree, Cloudflare Pages Functions, or another form service.
