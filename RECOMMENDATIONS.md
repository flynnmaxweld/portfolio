# 🌟 Flynn Maxwel — Portfolio Expansion & Improvement Guide

Here are several high-impact ways to improve the speed, branding, interaction, and accessibility of your portfolio before launching it to the public.

---

## 🏎️ 1. Asset Performance (Next-Gen Formats)
Currently, some project assets use desktop-grade image formats. To ensure mobile users on cellular networks load your site instantly:
* **Convert Images**: Convert any remaining `.png` or `.jpg` project screenshots to `.avif` or `.webp` (Vercel supports these natively).
* **Compression**: Run your image files through compression tools like [Squoosh](https://squoosh.app/) to reduce cover files from several megabytes down to less than `100KB` without losing visual quality.

---

## 🔗 2. OpenGraph Social Previews
When you share your site link on LinkedIn, Twitter, or Discord, platforms crawl your headers to render a card.
1. Create a `1200x630px` branding card or screenshot of your site.
2. Save it at:  
   📂 `assets/images/cover/cover.jpg`
3. This will immediately display a premium visual link preview when shared on social networks.

---

## 🎨 3. Tune WebGL Color Accent Palettes
The fluid background color is currently set to an orange-red theme inside `js/hero-project.js`. If you want to change the color palette (e.g., to an AI-themed neon teal or electric indigo):
1. Open [js/hero-project.js](file:///C:/Users/Flynn/.gemini/antigravity/scratch/portfolio/js/hero-project.js) and locate the color array definitions.
2. Update the color channel vectors to match your brand accent colors.

---

## ⌨️ 4. Keyboard Accessibility for 3D Works Cube
Adding keyboard listeners makes the 3D Works cube highly accessible for desktop power users. 
You can paste this event listener snippet inside [js/works.js](file:///C:/Users/Flynn/.gemini/antigravity/scratch/portfolio/js/works.js) (near mouse inputs) to let visitors rotate the cube faces using the **Arrow keys** or **W/S keys**:

```javascript
window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
    e.preventDefault();
    targetAngle += 90; // Spin to next project
  } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
    e.preventDefault();
    targetAngle -= 90; // Spin to previous project
  }
});
```

---

## 🌐 5. Custom Domain & HTTPS on Vercel
To make your portfolio look completely professional:
1. Buy a custom domain (e.g., `flynnmaxwel.dev` or `flynnmaxwel.com`) from a registrar.
2. Log into your Vercel Dashboard, go to your Project Settings, and click **Domains**.
3. Add your custom domain. Vercel will guide you to update your DNS records and will automatically configure free HTTPS certificates!
