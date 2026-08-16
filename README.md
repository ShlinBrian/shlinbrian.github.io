# Brian Lin's Portfolio

[![Live Site](https://img.shields.io/badge/live-shlinbrian.github.io-2ea44f)](https://shlinbrian.github.io/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20JS-orange)](#tech-stack)

A single-page personal portfolio website showcasing my work, experience, and
certifications as a software engineer specializing in backend systems, cloud
infrastructure, and AI/ML in production applications.

Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step —
featuring a glassmorphism aesthetic, a custom cursor, scroll-reveal animations,
and a randomized photo gallery.

### 🌐 Live Website

👉 **[https://shlinbrian.github.io/](https://shlinbrian.github.io/)**

## Features

- **Responsive single-page layout** — About, Experience, Education, Certifications, Projects, Gallery, and Contact
- **Glassmorphism design** with CSS variables, Flexbox/Grid, and custom animations
- **Custom cursor** that reacts to interactive elements
- **Scroll reveals** powered by the Intersection Observer API
- **Randomized gallery** that shuffles personal photography on each visit
- **SEO-ready** — Open Graph and Twitter Card previews, JSON-LD structured data, `sitemap.xml`, and `robots.txt`
- **Downloadable resume** served directly from the site

## Tech Stack

| Layer | Technology |
| --- | --- |
| Structure | HTML5 (semantic markup) |
| Styling | CSS3 — variables, Flexbox, Grid, keyframe animations |
| Behavior | Vanilla JavaScript (ES6+) |
| Fonts | Inter & Outfit via Google Fonts |
| Hosting | GitHub Pages |

## Project Structure

```
.
├── index.html         # Core structure and content of the single-page portfolio
├── styles.css         # Layout, typography, and animation definitions
├── script.js          # Custom cursor, scroll reveals, gallery rotation
├── robots.txt         # Crawler directives
├── sitemap.xml        # Sitemap for search engines
├── deploy_guide.md    # GitHub Pages deployment instructions
└── material/
    ├── LIN_Shih-Hsun_CV.pdf   # Downloadable resume
    └── web/                    # Portraits and gallery images
```

## Running Locally

No build step is required. Either open `index.html` directly in a browser, or
serve it over HTTP for correct asset path handling:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Then visit <http://localhost:8000>.

## Deployment

The site deploys automatically to GitHub Pages on every push to `main`. See
[`deploy_guide.md`](deploy_guide.md) for detailed setup instructions.

## Contact

- **Email** — [shlinbrian@gmail.com](mailto:shlinbrian@gmail.com)
- **GitHub** — [@shlinbrian](https://github.com/shlinbrian)
- **LinkedIn** — [in/shlinbrian](https://linkedin.com/in/shlinbrian)

## License

Released under the [MIT License](LICENSE). The source code is free to reuse;
personal content — resume, photographs, and portraits — is not.
