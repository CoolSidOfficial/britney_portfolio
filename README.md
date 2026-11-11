# Siddhant Jain: Portfolio

My personal portfolio site, covering my experience, projects, certificates and writing.

**Stack:** React 18, Vite, Tailwind CSS, react-awesome-reveal, react-fast-marquee.

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in dist/
npm run lint     # ESLint
```

## Project structure

```
src/
  data/          # all site content: projects, experience, certificates, articles, links
  components/    # one component per section, plus small shared pieces
  App.jsx        # page layout
public/          # images (WebP), icons
```

To change content, edit the files in `src/data/`; components only handle display.
To restyle the site, change the colour tokens in `tailwind.config.js`.

## Credits

Design inspired by [Brittany Chiang](https://brittanychiang.com)'s portfolio.
