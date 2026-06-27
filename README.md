# Areddy Vedhavihith Reddy - Interactive Professional Portfolio

A premium, state-of-the-art, and visually stunning developer portfolio website. Built using vanilla web technologies, it features custom animations, a filterable project catalog, an experience timeline, a theme customizer, and a responsive design tailored for software engineers and AI/ML developers.

Live deployment setup instructions for **GitHub Pages** are included below.

---

## 🌟 Visual & Interactive Features

- **Typing Subheading**: Dynamically cycles through primary roles (`AI/ML Engineer`, `Prompt Designer`, `Web Developer`).
- **Accent Theme Customizer**: Floating dashboard widget that allows visitors to change the site's accent glow color (Violet, Emerald, Crimson, Amber) dynamically. The choice is saved to the browser's `localStorage` to persist across visits.
- **Project Showcases**: Filterable project cards (Web Apps, AI & ML, Data Analytics) with detail modal popups containing highlights and code repository hooks.
- **Education & Experience Timeline**: Vertical timeline mapping B.Tech (Artificial Intelligence & Machine Learning) coursework alongside software internships.
- **Achievements & Certifications**: Side-by-side grid showcasing certifications (Cisco, Tata Forage, etc.) and problem-solving badges.
- **Interactive Contact Form**: A client-side validated contact form with custom error states and a success overlay message saving data locally.
- **Print-to-PDF Overrides**: Tailored CSS print stylesheets that clean up the layout and format the portfolio into a neat, high-contrast resume sheet if printed or saved to PDF.

---

## 🛠️ Built With

- **HTML5**: Semantic document structuring.
- **CSS3 (Vanilla)**: Custom styling layout utilizing HSL CSS custom variables, glassmorphic filters (`backdrop-filter`), keyframe animations, and flexbox/grid layout modules.
- **JavaScript (ES6+)**: Custom dynamic DOM rendering, state managers, typing controllers, active section highlight listeners (`IntersectionObserver`), and form input verifications.
- **Lucide Icons**: High-performance SVG icons loaded via CDN.

---

## 📁 Repository Directory Structure

- `index.html` - Core HTML layout and structure.
- `style.css` - Custom styling tokens, media queries, animations, and print overrides.
- `projects-data.js` - Centralized data file holding profile bio, skills, timeline, projects, and certifications.
- `app.js` - Interactive controller script handling DOM operations.
- `assets/` - Directory holding images:
  - `my_photo.jpg.png` - Professional profile avatar.
  - `project-*.png` - Generated graphic cover images for projects showcase.

---

## 💻 Local Setup & Development

To run the project locally on your machine:

1. Clone this repository:
   ```bash
   git clone https://github.com/vedhavihith/portfolio.git
   ```
2. Navigate into the directory:
   ```bash
   cd portfolio
   ```
3. Open `index.html` directly in your browser, or start a local server:
   ```bash
   npx serve .
   ```

---

## 🚀 How to Deploy to GitHub Pages

To host this portfolio for free under your personal GitHub URL (e.g., `https://vedhavihith.github.io/portfolio`):

1. **Create Repository**: Go to GitHub and create a new **public** repository named `portfolio`.
2. **Push Files**: Initialize Git and push your local files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio website codebase"
   git branch -M main
   git remote add origin https://github.com/vedhavihith/portfolio.git
   git push -u origin main
   ```
3. **Configure Pages**:
   - Go to your repository tab on GitHub and click on **Settings** (gear icon).
   - In the left-hand sidebar under the *Code and automation* section, click on **Pages**.
   - Under the **Build and deployment** section, select **Deploy from a branch** in the dropdown.
   - Select your deployment branch to be `main` (and folder `/ (root)`), then click **Save**.
4. **Access Website**: Within 1-2 minutes, your website will be live at:
   **`https://vedhavihith.github.io/portfolio`**
