# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

The marketing website for Lloyd Criminal Consulting Co, deployed at https://lloydconsulting.vercel.app/ (git-integrated Vercel deployment, no `vercel.json` in the repo). Built from the "Doob/Imroz" React template (see `http://imroz.rainbowit.net/dark-portfolio-landing#home` and the [Figma design](https://www.figma.com/file/G3mxLMJ6vJQd49AAYqopnr/Lloyd-Consulting-Website?node-id=0%3A1)) via `create-react-app --eject`, so `config/` and `scripts/` are CRA's ejected internals.

## Commands

- `npm install` — install dependencies
- `npm run start` — dev server (`scripts/start.js`, webpack-dev-server)
- `npm run build` — production build (`scripts/build.js`) into `build/`
- `npm test` — Jest via `scripts/test.js`; run a single file with `npm test -- src/path/to/File.test.js`, or `npm test -- --testPathPattern=Foo` to filter by name. There are currently no test files in `src/`.

Do not hand-edit `config/webpack.config.js` or `scripts/*` unless a change genuinely requires touching the CRA build internals — the ejected setup is otherwise stock CRA 3.x.

## Architecture

This is a single-page site, but the repo is the **entire unused multi-demo template** the site was built from — only one route is live.

- **Entry**: `src/index.js` defines every route for the template's demo pages (dozens: `home/*`, `dark/*`, `elements/*`, `blocks/*`) directly in a `<Switch>`, without going through the shared `component/common/App.jsx` layout.
- **The only route that matters for the real site is `/`**, which renders `src/dark/PortfolioLanding.jsx` (aliased as `DarkPortfolioLanding`). This is the actual Lloyd Consulting Co homepage — hero, about, services, and contact sections all live inline in this one file. **This is the file to edit for real content changes** (copy, services list, images).
- Everything else under `src/home/`, `src/elements/`, `src/blocks/`, and most of `src/component/` is unused/vestigial template demo content kept for reference (other homepage variants, a blog, portfolio grids, pricing tables, etc.). Don't assume a component is live just because it's imported in `index.js` — check whether its route is actually the site's landing page.
- `PortfolioLanding` composes: `HeaderThree`, `FooterTwo`, `ContactThree` (from `elements/contact/`), `BlogContent` data, and text/scroll effects (`react-text-loop`, `react-scroll-up`, `react-parallax` family libs).
- **Contact form**: `src/elements/contact/FormStyle.js` submits via `emailjs-com` directly from the client, with the EmailJS service/template/user IDs hardcoded inline (not env vars). Change these three literals if the EmailJS account/template changes.
- **Styling** is not really in `src/`: `src/index.scss` is just an import manifest pulling in Bootstrap, `public/assets/css/plugins.css`, and — critically — `public/assets/scss/style.scss`, which is the real source of the template's SCSS (organized under `public/assets/scss/{header,footer,template,default,common,elements,blog}`). Most visual styling changes belong under `public/assets/scss/`, not `src/`.
- Static images/icons/JS libs used by the templates live under `public/assets/{images,js}`; the live homepage's images (e.g. the about-section photo) are referenced by absolute path like `/assets/images/...`.
- Routing is `react-router-dom` v5 (`BrowserRouter`/`Switch`/`Route`), all paths prefixed with `${process.env.PUBLIC_URL}`.
