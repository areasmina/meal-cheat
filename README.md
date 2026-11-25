# Meal Cheat

**Meal Cheat** is a fast, dead-simple, offline-first Progressive Web App (PWA) built to help you **decide what to eat using what's already in your kitchen** and **save money on groceries and food**.

Live Web / PWA: **https://areasmina.github.io/meal-cheat/**

---

## How It Works (2 Focused Tabs)

### 1. **Eat** (`src/ui/eatScreen.js`)
Open the app and answer one question: **How tired are you right now?**
- Pick your energy level (**No-Cook · 2m**, **Hands-Off**, **Quick · 10m**, or **Cooking Mood**).
- See the best **ready-in-kitchen** meal first (falling back to fewest missing ingredients), with cost per serving, **Cook This**, **Next Idea ↻**, and **+ Add Missing** straight to your shopping list.
- Tap **Breakfast**, **Lunch**, or **Dinner** in **Today's Home Meals** to track daily home meals and your estimated monthly savings (`Est. saved this month`).
- Search or filter **Browse Recipes**, or tap **`+ Add`** inside the search bar to import from recipe blogs (`r.jina.ai`), YouTube links (with 4-frame thumbnail selection), pasted captions, or `.txt` / `.srt` / `.vtt` files.

### 2. **Shop** (`src/ui/shopScreen.js`)
Keep groceries focused and track spending effortlessly:
- **Grocery List:** Track weekly spend vs. your weekly target and monthly food cap, quickly log any grocery/food spend, add missing recipe ingredients or **Suggest Staples**, and check off items as you shop. Checking off an item automatically stocks it into **My Kitchen** and logs its price.
- **My Kitchen:** Search and toggle what ingredients you currently have stocked—every recipe on **Eat** updates immediately so you always see what you can make right now.

### Budget & Settings (`⚙` or `$340 left` pill)
- Configure your monthly food cap and weekly grocery target, switch Dark/Light mode, or export/import a `.json` backup.

---

## Clean Architecture & Folder Structure

Built with **vanilla ES Modules + Vite 6** and zero runtime framework dependencies (`0` external runtime libraries):

```text
meal-cheat/
├── index.html                  # App shell, 1-line topbar, 2-tab bottom navigation
├── vite.config.js              # Vite config splitting heavy recipe datasets cleanly
├── package.json                # Minimal setup (only vite devDependency)
├── public/
│   ├── manifest.webmanifest    # PWA install metadata
│   ├── sw.js                   # Offline service worker (network-first HTML, cache-first assets)
│   └── icons/                  # 192x192 & 512x512 app icons
└── src/
    ├── main.js                 # App entrypoint, render loop, delegated event/form handlers
    ├── styles/
    │   ├── tokens.css          # Dark/light color tokens, type scale, radii, spacing
    │   └── app.css             # Responsive minimalist styles & horizontal scroll hints
    ├── state/
    │   └── store.js            # Local-first state, normalization, safeUrl/esc, savings & match selectors
    ├── data/
    │   ├── recipes.js          # Core starter recipes & effort metadata
    │   ├── playlistRecipes.js  # YouTube recipe library chunk
    │   ├── instagramRecipes.js # Saved Instagram recipe library chunk
    │   └── catalog.js          # Pantry/aisle normalization & staple list builder
    └── ui/
        ├── eatScreen.js        # Eat tab (energy picker, top suggestion, home meals, recipe browser)
        ├── shopScreen.js       # Shop tab (weekly budget, aisle grocery list, My Kitchen toggles)
        ├── cookModal.js        # Step checklist, auto-detected cook timers, source link, log meal CTA
        ├── addRecipeModal.js   # Link/blog/YouTube/transcript/.srt importer & 4-frame thumbnail picker
        ├── settingsModal.js    # Budget targets, dark/light theme, JSON backup export/import, reset
        └── photoHelper.js      # Safe image banners & SVG progress rings
```

---

## Safety & Privacy

- **100% Local-First Data:** All pantry items, shopping lists, meal logs, spending, and custom recipes stay inside your browser's `localStorage` (`meal_cheat_v3`). Built-in recipes are excluded from `localStorage` writes (`~15 KB` typical storage footprint).
- **XSS & Link Validation:** All user-supplied text passes through `esc()`, all image/external URLs are checked by `safeUrl()` (`http(s):` or base64 uploaded photos only), external links enforce `rel="noopener noreferrer"`, and imported `.json` backups pass through `normalizeState()`.
- **Bounded Optional Fetches:** Blog/YouTube metadata fetches inside `+ Add` use `AbortSignal.timeout()` (`7s–9s`) and degrade cleanly offline.

---

## Run & Build Locally

```bash
npm install
npm run dev       # Local development server
npm run build     # Production PWA build in dist/
npm run preview   # Preview built dist/ locally
```
