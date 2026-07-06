# ✍️ How to Make This Portfolio Your Personal Signature

This guide outlines exactly how to inject your unique identity, coding philosophy, and visual brand into the portfolio to make it stand out as uniquely yours.

---

## 🌀 1. Your Custom Footer ASCII Artwork (The Signature Mark)
The interactive, mouse-tracking ASCII art orb in the footer of your homepage is rendered dynamically from a source image file. You can customize this to display your own initials, monogram, or logo!
* **The Asset location**:  
  📂 `assets/images/footer/left.png`
* **How to Customize it**:
  1. Create a simple, high-contrast, black-and-white icon or logo (e.g. a capital **`F`**, a geometric shape, or your personal glyph) in a square format (approx. `500x500px`).
  2. Save it as a transparent PNG.
  3. Rename it to `left.png` and save it inside `/assets/images/footer/`, overwriting the old file.
  4. **The Result**: The homepage ASCII engine will automatically parse your custom image and render it as a spinning, interactive 3D ASCII art of your own personal monogram!

---

## 🎨 2. Choose Your Signature Color Theme
The default accent color of the portfolio is orange-red. You can change this to match your personal brand by modifying just three CSS variables!
1. Open [styles/index.css](file:///C:/Users/Flynn/.gemini/antigravity/scratch/portfolio/styles/index.css) (and the styles for `info.css`, `contact.css`, and `works.css`).
2. Locate the `:root` variables block at the top:
   ```css
   :root {
     --accent-hue: 9; /* Change this number to shift the brand color! */
     --accent: hsl(var(--accent-hue), 100%, 54%);
     --accent-glow: hsl(var(--accent-hue), 100%, 50%);
   }
   ```
3. Change `--accent-hue` to one of these signature presets:
   * 🩵 **Cyberpunk Teal**: Set to **`172`**
   * 💜 **Intelligent Electric Indigo**: Set to **`258`**
   * 💚 **Matrix Emerald Green**: Set to **`145`**
   * 💛 **Techno Neon Yellow**: Set to **`48`**
   * 💙 **Deep Sea Sapphire**: Set to **`210`**

---

## ✍️ 3. Refine Your Philosophy Tagline
Your hero tagline is the first thing recruiters and visitors see. It should capture your specific engineering values.
1. Open [js/i18n.js](file:///C:/Users/Flynn/.gemini/antigravity/scratch/portfolio/js/i18n.js) and locate the `'index.hero.tagline'` key:
   ```javascript
   'index.hero.tagline': 'Learning how systems work.<br><span class="other-accent">Designing how they feel.</span>',
   ```
2. Replace it with your own motto. E.g.:
   * *For Systems/Backend focus*: `"Automating the complex.<br><span class=\"other-accent\">Engineering the reliable.</span>"`
   * *For AI/ML focus*: `"Training neural nets.<br><span class=\"other-accent\">Unlocking artificial minds.</span>"`

---

## 📷 4. Style Your Profile Image (`me.avif`)
Your profile portrait at `assets/images/profile/me.avif` is a core visual anchor.
* **Make it special**: Try using a high-contrast black-and-white portrait, a stylized cyberpunk avatar, or an abstract AI-generated digital portrait of yourself.
* **Format**: Keep it compressed as `.avif` or `.webp` to ensure fast loading times on mobile networks.
