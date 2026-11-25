# Meal Cheat

**Meal Cheat** is a fast, offline-capable Progressive Web App (PWA) for low-effort home meals, smart pantry-first grocery planning, budget tracking, and a cozy **3D Bamboo Garden** Tamagotchi mini-game.

Live Web / PWA: **https://areasmina.github.io/meal-cheat/**

---

## Core User Experience

Meal Cheat is organized into five focused tabs designed for one-handed mobile use as well as desktop browsers:

1. **Eat (`src/ui/eatScreen.js`)**
   - Pick what you want (**Meal**, **Drink**, **Snack**, or **Comfort**) and your current energy level (**Wiped out**, **Hands-off**, **Quick cook**, or **Cooking mood**).
   - Recommends 100% fridge-ready dishes first so you never get stuck missing ingredients.
   - Single-tap **Today's Meals** tracker (**Breakfast / Lunch / Dinner**) updates your `0/3` daily ring and grows `+1` bamboo shoot per home meal.
   - Includes **Prepped in Fridge** leftover tracking, **Order Takeout?** shortcut, and optional 1-tap spend logging (automatically hidden in **Simple Mode**).

2. **Recipes & Takeout (`src/ui/recipesScreen.js`)**
   - Browse **987 curated recipes** (441 YouTube dishes + 546 saved Instagram food reels) plus your own custom additions.
   - Minimalist 1-row filter bar (**Filters ▾**, **Match Fridge**, **Ready**) with a collapsible drawer for **Source**, **Category**, and **Effort**.
   - **Takeout & Platters** sub-tab tracks weekly takeout/platter quotas and evaluates per-serving value against homemade meals (`$3.15` baseline) and your monthly treat pot.

3. **Shop & Kitchen (`src/ui/shopScreen.js`)**
   - **Trip List:** Builds a mood-based shopping list (*Survival Week*, *Balanced Week*, *Cooking Mood*, or *Custom Pick*) automatically skipping ingredients already marked in your kitchen.
   - **Weekly Grocery Reminder & Plan:** Lock your shopping day & reminder time, open the **4/7-Day Meal Plan**, export an RFC 5445 `.ics` phone calendar file, or launch the **Meet Bao Tour**.
   - **My Kitchen & Master Catalog:** Toggle stocked pantry items by aisle; adding any new recipe automatically syncs its ingredients into the Master Catalog.

4. **Explore (`src/ui/exploreScreen.js`)**
   - Visual video-thumbnail discovery feed across all dishes with horizontal edge-fade filter pills and instant search across titles, `@creators`, ingredients, and spoken transcripts.

5. **Garden (`src/ui/gardenScreen.js` + `src/three/gardenStage.js`)**
   - Interactive **3D Bamboo Garden Island** mini-game powered by Three.js (lazy-loaded only when visiting **Garden**).
   - **Care:** Live **Fullness**, **Dew**, and **Bond** meters with tactile actions (**Water** 5× to sprout `+1` real 3D bamboo shoot on the island, feed **Bamboo / Apple / Carrot**, or tap directly on your panda to hop & gain `+1%` Bond with floating reward popups).
   - **Squad:** Unlock and switch between 4 procedural 3D vinyl/cel-ink pandas (**Bao**, **Brioche**, **Boba**, and **Mochi**) or showcase the **All 4 Lineup** across 5 turnaround camera angles, **Spin** turntable, and **Ink** cel-outlines.
   - **Outfits, Island & Quests:** Mix & match modular 3D accessories across 5 sockets (`HeadSocket`, `FaceSocket`, `NeckSocket`, `TorsoSocket`, `HandSocket_R`), place 3D island props (*Stone Lantern*, *Picnic Blanket*, *Koi Pond*, *Cherry Tree*, *Agua Fresca Stand*), and claim weekly budget rewards.

---

## Adding Recipes (`+ Add`)

Tap **`+ Add`** inside the search bar on **Explore** or **Recipes**:

- **Recipe Blogs / Websites:** Paste a URL (`https://...`) and tap **Auto-Fill**—fetches readable Markdown via `r.jina.ai` and extracts structured recipe-card ingredients, steps, and cook time.
- **YouTube Videos:** Paste a YouTube link to load the title (`oEmbed`), choose from **4 video frames** (`Cover`, `25%`, `50%`, `75%`) or upload a custom food photo, and paste captions/description to pull ingredients & steps.
- **Text & Subtitle Files:** Paste spoken captions or upload `.txt`, `.md`, `.srt`, or `.vtt` files—timestamps are stripped automatically and matched against your Master Catalog and culinary staples.

---

## Architecture & Folder Structure

Meal Cheat uses **vanilla ES Modules + Vite 6 + Three.js** with zero framework runtime overhead, keeping the codebase transparent and easy for any engineer to read or modify:

```text
meal-cheat/
├── index.html                    # App shell, topbar, main view mount, bottom 5-tab nav
├── vite.config.js                # Vite build config & manualChunks code-splitting
├── package.json                  # Scripts & minimal dependencies (three, vite)
├── public/
│   ├── manifest.webmanifest      # PWA install manifest
│   ├── sw.js                     # Offline service worker (network-first HTML, cache-first assets)
│   ├── icons/                    # 192x192 & 512x512 PWA icons
│   └── models/acc/               # Lazy-loaded .glb meshes for unlockable bonus accessories
├── src/
│   ├── main.js                   # App entrypoint, render loop, event delegation, lazy 3D loader
│   ├── styles/
│   │   ├── tokens.css            # Design tokens (dark/light palettes, type scale, radii, spacing)
│   │   └── app.css               # Responsive layout, horizontal edge-fade chips, Garden HUD
│   ├── state/
│   │   └── store.js              # Local-first store, schema normalization, safeUrl/esc, selectors
│   ├── data/
│   │   ├── recipes.js            # Core recipes, effort metadata, pandas, outfits, island props
│   │   ├── playlistRecipes.js    # Curated YouTube recipe dataset
│   │   ├── instagramRecipes.js   # Saved Instagram food reel dataset
│   │   └── catalog.js            # Master ingredient catalog sync, aisle/price heuristics, shop planner
│   ├── three/
│   │   ├── icon3d.js             # Shared offscreen WebGL renderer blitting 3D vinyl icons to 2D canvases
│   │   ├── bistroPandas.js       # Procedural 3D panda rigs (Bao, Brioche, Boba, Mochi) & 9 native outfits
│   │   ├── pandaLoader.js        # Socket attachment, studio PMREM lighting, .glb bonus accessory loader
│   │   └── gardenStage.js        # Lazy-loaded 3D island, wind-swept InstancedMesh grass, mountains & props
│   └── ui/
│       ├── eatScreen.js          # Eat tab renderer
│       ├── recipesScreen.js      # Recipes & Takeout tab renderer
│       ├── shopScreen.js         # Shop, My Kitchen & Master Catalog tab renderer
│       ├── exploreScreen.js      # Visual Explore feed renderer
│       ├── gardenScreen.js       # Cohesive Mini-Game Garden HUD & 5-tab drawer renderer
│       ├── cookModal.js          # Step-by-step cooking sheet, countdown timer & transcript viewer
│       ├── addRecipeModal.js     # Universal link/transcript/file importer & 4-frame thumbnail picker
│       ├── settingsModal.js      # Budget, schedule/.ics export, Family profiles, 4/7-Day Plan, Intro Tour
│       └── photoHelper.js        # Safe recipe photo banners & SVG progress rings
├── scripts/
│   └── build_instagram_recipes.py # Offline data utility used to build instagramRecipes.js
└── blender/
    └── build_modular_panda.py    # Headless Blender generator for bonus .glb accessory meshes
```

### Key Engineering Design Choices
- **Event Delegation:** All UI interactions route through semantic `data-action="..."` and `data-form="..."` attributes in `src/main.js`, avoiding memory leaks from per-render listeners.
- **Single Shared WebGL Context for UI Icons (`src/three/icon3d.js`):** Browsers cap active WebGL contexts (~8–16). `icon3d.js` renders all 3D vinyl icons in one shared offscreen `96×96` `WebGLRenderer` and blits pixels into lightweight 2D `<canvas class="ic3d">` elements.
- **Code-Split Bundles (`vite.config.js`):** Heavy datasets (`recipe-library`), `three` (`vendor-three`), and the 3D island (`garden-3d`, dynamically imported only when opening **Garden**) are split into separate cacheable chunks.
- **Compact LocalStorage Persistence (`src/state/store.js`):** Built-in `STARTER_RECIPES` (`987` items) stay in static JS bundles; `serializeForStorage()` writes **only user-created recipes and logs** (`~15 KB` instead of `~1.4 MB`), keeping mobile taps instantaneous.

---

## Security & Privacy Model

- **100% Local-First User Data:** All meals, budgets, family profiles, pantry state, and custom recipes live locally in your browser's `localStorage` (`meal_cheat_v3`). No account, cloud database, or tracking analytics are used.
- **XSS & URL Sanitization:**
  - All user-controlled text rendered via template literals passes through `esc()` (`&, <, >, ", '`).
  - External links (`sourceUrl`) and image sources pass through `safeUrl()` (`src/state/store.js`), strictly allowing `https://` / `http://` (and `data:image/*;base64` only for local photo uploads) and blocking `javascript:` or `data:text/html` payloads.
  - All external `<a target="_blank">` links enforce `rel="noopener noreferrer"`.
- **Validated Backup Restore:** Importing a `.json` backup runs through `normalizeState()` to type-check fields, clamp numeric ranges, and strip unknown/unsafe properties before persisting.
- **Bounded Network Calls:** Optional external metadata fetches (`youtube.com/oembed` and `r.jina.ai` in `+ Add Recipe`) enforce `AbortSignal.timeout()` and degrade gracefully offline.

---

## Getting Started (Developers)

### Prerequisites
- **Node.js** `>= 18` and **npm**

### Install & Run Locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (e.g. `http://localhost:5173/`).

### Build for Production
```bash
npm run build
npm run preview
```
Vite outputs a self-contained static PWA in `dist/` (`base: './'`) that can be hosted on **GitHub Pages**, **Vercel**, **Netlify**, Cloudflare Pages, or any static file server.
