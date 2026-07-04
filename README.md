# 🚀 Flynn Maxwel — Portfolio Management Guide

Welcome to your portfolio! This guide details exactly how to add, modify, or remove projects, update details, manage assets, and deploy updates to Vercel.

---

## 📁 Key File Structure

Here is where the primary files and folders live:
* **Root (`/`)**:
  * `index.html` — Homepage structure.
  * `info/index.html` — About & Profile info page.
  * `contact/index.html` — Contact links and cards page.
  * `works/index.html` — Interactive 3D cube project viewer.
* **Assets (`/assets/`)**:
  * `assets/images/projects/Covers/` — Contains project cover images named sequentially (`1.jpg`, `2.jpg`, `3.jpg`, etc.).
  * `assets/Flynn_Maxwel_Resume.pdf` — Your downloadable resume file.
* **Styles (`/styles/`)**:
  * `styles/index.css` — Styles for homepage, typography, and responsive overrides.
  * `styles/contact.css` — Styles for the contact card grid.
  * `styles/works.css` — Styles for the 3D cube viewport.
* **Scripts (`/js/`)**:
  * `js/index.js` — Homepage animations, modal interactions, and homepage project database.
  * `js/works.js` — 3D cube rendering logic and works page project database.

---

## 🛠️ How to Add a New Project (Step-by-Step)

To add a new project (e.g. project number `4`), follow these steps:

### Step 1: Save the Project Cover Image
1. Name your new project cover image **`4.jpg`**.
2. Save it inside the covers directory:  
   📂 `assets/images/projects/Covers/4.jpg`

---

### Step 2: Add to Homepage HTML (`index.html`)
Open [index.html](file:///C:/Users/Flynn/.gemini/antigravity/scratch/portfolio/index.html) and locate the projects list wrapper (`<div class="projects-list" id="projects-list">`). Add a new item at the bottom of the list:

```html
<div class="proj-item" data-id="my-new-project" data-img="assets/images/projects/Covers/4.jpg" data-date="07 2026">
  My New Project Name
</div>
```
* **`data-id`**: A unique slug identifier for your project (e.g., `my-new-project`).
* **`data-img`**: The path to the cover image you saved in Step 1.
* **`data-date`**: Month and year of the project.

---

### Step 3: Register in Homepage Script (`js/index.js`)
Open [js/index.js](file:///C:/Users/Flynn/.gemini/antigravity/scratch/portfolio/js/index.js) and locate the `PROJECTS` object dictionary at the bottom. Add your project configuration:

```javascript
'my-new-project': {
  desc: "A detailed single-sentence description of what your project does, its features, and goals.",
  category: 'Systems / AI / Interface Category', 
  year: '2026', 
  tags: ['React', 'Node.js', 'Python'],
  link: 'https://github.com/flynnmaxweld/repository-link', // Optional github link
  images: ['assets/images/projects/Covers/4.jpg']
},
```

---

### Step 4: Register in Works Page Script (`js/works.js`)
Open [js/works.js](file:///C:/Users/Flynn/.gemini/antigravity/scratch/portfolio/js/works.js) and locate the `var PROJECTS = [...]` array at the top. Add your project object:

```javascript
{ 
  id: 'my-new-project', 
  title: 'My New Project Name', 
  desc: "A detailed single-sentence description of what your project does, its features, and goals.", 
  category: 'Systems / AI / Interface Category', 
  year: '2026', 
  tags: ['React', 'Node.js', 'Python'], 
  link: 'https://github.com/flynnmaxweld/repository-link', // Optional github link
  cover: 'assets/images/projects/Covers/4.jpg' 
},
```

---

### Step 5: Add Responsive Card Cover (`styles/index.css`)
Open [styles/index.css](file:///C:/Users/Flynn/.gemini/antigravity/scratch/portfolio/styles/index.css), scroll to the mobile media query (`@media (max-width: 768px)`), and add a rule under the project previews block so the cover displays inline on mobile screens:

```css
.proj-item[data-id="my-new-project"]::before {
  background-image: url('../assets/images/projects/Covers/4.jpg');
}
```

---

## 💻 Local Development Server

To run and preview your website locally:
1. Open terminal inside the root directory.
2. Run the Node server script:
   ```bash
   node server.js
   ```
3. Open your browser to **`http://localhost:8080/`**.

---

## 🚀 Deploying Updates to Vercel

If you set up auto-deploying via Vercel integration:
1. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "Added my new project"
   ```
2. Push your changes to GitHub:
   ```bash
   git push
   ```
3. Vercel will automatically detect the push, build your site, and update it live in about 20 seconds!
