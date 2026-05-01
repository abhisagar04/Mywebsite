# Saanvi Artography Website

A luxury Black + Gold themed event management & photography website built with React + Vite + Tailwind CSS.

---

## Folder Structure

```
saanvi-artography/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── CTABanner.jsx
│   │   ├── Booking.jsx
│   │   ├── Reviews.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── data/
│   │   └── translations.js
│   ├── hooks/
│   │   ├── useLanguage.js
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── .gitignore
```

---

## Local Development

### Step 1 – Install Node.js
Download from: https://nodejs.org (choose LTS version)

### Step 2 – Install dependencies
```bash
cd saanvi-artography
npm install
```

### Step 3 – Start development server
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Step 4 – Build for production
```bash
npm run build
```

---

## Deploy to Vercel (Free – Recommended)

### Method A: Via GitHub + Vercel (Easiest)

1. **Create a GitHub account** at https://github.com if you don't have one.

2. **Create a new repository**:
   - Go to https://github.com/new
   - Name it `saanvi-artography`
   - Keep it Public, click "Create repository"

3. **Upload your files**:
   - On your computer, open a terminal/command prompt in the project folder
   - Run these commands one by one:
   ```bash
   git init
   git add .
   git commit -m "Initial commit – Saanvi Artography website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/saanvi-artography.git
   git push -u origin main
   ```
   *(Replace YOUR_USERNAME with your GitHub username)*

4. **Deploy on Vercel**:
   - Go to https://vercel.com and sign up with your GitHub account
   - Click "Add New Project"
   - Select your `saanvi-artography` repository
   - Framework: Vite (auto-detected)
   - Click "Deploy"
   - Done! Your site is live in ~60 seconds!

5. **Your site URL** will look like: `saanvi-artography.vercel.app`

---

### Method B: Deploy via Vercel CLI (From Terminal)

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. Your site deploys instantly.

---

## Deploy on Mobile (Android / iOS)

### Using GitHub Mobile App:
1. Install the **GitHub Mobile** app
2. Create account and repo as above
3. Use **Working Copy** app (iOS) or **MGit** (Android) to push files

### Alternative – Use Stackblitz:
1. Go to https://stackblitz.com
2. Click "Import from GitHub"
3. Connect Vercel from within Stackblitz

---

## Adding Real Photos

Replace placeholder cards in `src/components/Gallery.jsx`:

```jsx
// Replace the PhotoCard component with:
<img
  src="/your-photo.jpg"   // Put photos in /public folder
  alt="Wedding Photography"
  className="w-full h-full object-cover"
/>
```

Or use online image URLs:
```jsx
<img src="https://your-image-url.com/photo.jpg" alt="..." />
```

---

## Customization Quick Reference

| What to Change | File |
|---|---|
| Business name / phone | `src/components/Navbar.jsx`, `Footer.jsx`, `Contact.jsx` |
| Hero text | `src/data/translations.js` |
| Services list | `src/components/Services.jsx` |
| Reviews | `src/components/Reviews.jsx` |
| Gallery photos | `src/components/Gallery.jsx` |
| Colors | `src/index.css` (CSS variables) |
| Fonts | `index.html` + `tailwind.config.js` |

---

## Tech Stack
- **React 18** – UI framework
- **Vite 5** – Build tool (super fast)
- **Tailwind CSS 3** – Utility-first CSS
- **React Router** – Navigation
- **Google Fonts** – Playfair Display, Cormorant Garamond, DM Sans

---

## Contact / Support
WhatsApp: https://wa.me/918550852773
