# GEMINI.md - Brian Lin's Portfolio

## Project Overview
This project is a high-performance, visually rich personal portfolio website for **Brian Lin**, a Software Engineer specializing in backend systems, cloud infrastructure, and AI/ML. The site is designed with a modern "glassmorphism" aesthetic and features smooth interactive elements.

- **Purpose:** Professional showcase for skills, experience, certifications, and personal projects.
- **Main Technologies:** 
  - **HTML5:** Semantic structure for SEO and accessibility.
  - **CSS3 (Vanilla):** Custom styling with CSS variables, Flexbox/Grid, and animations.
  - **JavaScript (Vanilla):** Custom cursor, Intersection Observer for scroll reveals, and a dynamic randomized gallery.
  - **Fonts:** Inter and Outfit (via Google Fonts).

## Project Structure
- `index.html`: The core structure and content of the single-page portfolio.
- `styles.css`: All layout, typography, and animation definitions.
- `script.js`: Handles interactivity, custom cursor logic, and gallery rotations.
- `material/`: Contains all static assets.
  - `material/web/`: Images used across the site (portraits and gallery).
  - `material/LIN_Shih-Hsun_CV.pdf`: The downloadable resume.
- `deploy_guide.md`: Detailed instructions for deploying to GitHub Pages.

## Building and Running
As a static website, this project does not require a build step.

### Local Development
To view the site locally, you can:
1.  **Open File:** Directly open `index.html` in any modern web browser.
2.  **Live Server:** Use a simple HTTP server for better handling of assets and paths:
    ```bash
    # Using Python 3
    python3 -m http.server 8000
    ```
    Then visit `http://localhost:8000`.

### Testing
- **Visual Regression:** Manually verify layouts on mobile, tablet, and desktop breakpoints.
- **Link Check:** Ensure all anchor links (e.g., `#experience`) and external links (GitHub, LinkedIn) are functional.
- **Performance:** Check image loading times; images are currently stored in `material/web/`.

## Deployment
The project is optimized for **GitHub Pages**.
- **Repository Name:** `shlinbrian.github.io`
- **Branch:** `main`
- **Hosting URL:** `https://shlinbrian.github.io`

Refer to `deploy_guide.md` for step-by-step deployment instructions.

## Development Conventions
- **Styling:** Use Vanilla CSS. Avoid adding heavy CSS frameworks (like Tailwind or Bootstrap) to maintain the unique, custom-crafted feel.
- **Interactivity:** Prefer Vanilla JS over libraries like jQuery. Use `IntersectionObserver` for performant scroll-based animations.
- **Assets:** Keep high-resolution images in `material/web/`. Optimize image sizes before committing to ensure fast load times.
- **Naming:** Follow kebab-case for CSS classes (e.g., `section-padding`, `hero-content`) and camelCase for JavaScript variables.
