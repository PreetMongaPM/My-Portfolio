# Portfolio

Dark, minimal one-page portfolio built with React + Tailwind CSS.

## Quick Start

```bash
npx create-react-app my-portfolio
cd my-portfolio

# Copy the src/ folder contents into your project
# Install dependencies
npm install lucide-react
npm start
```

## File Structure

```
src/
├── constants/
│   ├── theme.js          ← All colors, fonts, spacing tokens
│   └── data.js           ← Your personal info, skills, projects, etc.
│
├── hooks/
│   ├── useScrollReveal.js    ← Fires when element enters viewport
│   └── useActiveSection.js   ← Tracks which section is visible (for navbar)
│
├── components/
│   ├── ui/
│   │   ├── MagicCursor.jsx   ← Custom cursor: dot + glowing orb + sparkles
│   │   ├── PhotoCard.jsx     ← 3D tilt hero photo with hover effects
│   │   ├── Reveal.jsx        ← Scroll-triggered animation wrapper
│   │   ├── AnimatedHeading.jsx  ← Word-by-word section headings
│   │   ├── SectionLabel.jsx  ← "02 — Skills" labels
│   │   ├── SIcon.jsx         ← Simple Icons brand logos
│   │   └── Grain.jsx         ← Film grain texture overlay
│   │
│   ├── layout/
│   │   └── NavBar.jsx        ← Sticky nav with blur + active link
│   │
│   └── sections/
│       ├── Hero.jsx          ← Intro, photo, CTAs
│       ├── Skills.jsx        ← Tech stack with brand icons
│       ├── CodingStats.jsx   ← Codolio, GitHub, LeetCode, Codeforces
│       ├── Resume.jsx        ← Stats + PDF preview + download
│       ├── Experience.jsx    ← Work history timeline
│       ├── Projects.jsx      ← Featured project cards
│       ├── Education.jsx     ← Degrees + certifications
│       └── Contact.jsx       ← Email + socials + footer
│
├── App.jsx     ← Root: wires all sections together
└── index.css   ← Fonts, cursor reset, keyframe animations
```

## Personalizing

### 1. Your Info
Edit **`src/constants/data.js`** — replace everything with your real info:
- `PERSONAL` — name, title, tagline, email, social links
- `CODING_PROFILES` — your usernames on each coding platform
- `SKILLS`, `EXPERIENCE`, `PROJECTS`, `EDUCATION`

### 2. Your Photo
In `src/components/sections/Hero.jsx`, find:
```jsx
<PhotoCard imageSrc={null} />
```
Change to:
```jsx
<PhotoCard imageSrc="/your-photo.jpg" />
```
Place the photo in `/public/your-photo.jpg`.

### 3. Theme Color
Open `src/constants/theme.js` and change `ACCENT`:
```js
export const ACCENT = "#34d399";  // emerald (current)
// Try: "#38bdf8" (sky blue), "#a78bfa" (violet), "#fb7185" (rose)
```

### 4. Codolio / Coding Stats
In `src/constants/data.js`:
```js
export const CODING_PROFILES = {
  codolio:    "your-username",
  github:     "your-username",
  leetcode:   "your-username",
  codeforces: "your-username",
};
```
The section auto-fetches live Codeforces data and renders GitHub/LeetCode stats cards.

### 5. Resume PDF
Place your resume at `public/JohnDoe_Resume.pdf` and update `PERSONAL.resumeUrl` in `data.js`.

### 6. Add / Remove Sections
In `src/App.jsx`, simply add or remove section components and update `NAV_LINKS` in `data.js`.

## Design Tokens (theme.js)

| Token | Value | Use |
|---|---|---|
| `ACCENT` | `#34d399` | Emerald — all highlights |
| `BG` | `#080808` | Page background |
| `SURFACE` | `rgba(255,255,255,0.02)` | Card backgrounds |
| `BORDER` | `rgba(255,255,255,0.07)` | Card borders |
| `FONT_DISPLAY` | Syne | Headings |
| `FONT_BODY` | DM Sans | Body text |
| `EASE_SPRING` | `cubic-bezier(0.16,1,0.3,1)` | Springy animations |
