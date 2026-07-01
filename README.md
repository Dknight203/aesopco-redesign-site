# The Aesop Agency Site

Static Vercel site for The Aesop Agency.

## Pages

- `index.html` - Fractional CRO / revenue systems homepage
- `games/index.html` - Aesop for Games landing page

## Local Development

Serve the folder with any static server:

```bash
python -m http.server 4177 --bind 127.0.0.1
```

Then open:

- `http://127.0.0.1:4177/`
- `http://127.0.0.1:4177/games`

## Deploy

This is Vercel-ready as a static site. Import the GitHub repository into Vercel and use the default static settings.

## SEO / GEO

Included search and AI-discovery files:

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `vercel.json` redirect from `/hello-world/` to `/`

Both pages include canonical URLs, Open Graph metadata, Twitter card metadata, and JSON-LD structured data for the organization, services, founder, FAQ, and breadcrumbs.
