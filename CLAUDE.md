# CLAUDE.md - Texas Trip Website Documentation

> 德州8天7夜籃球主題自駕遊 · 單頁應用程式 · 日系柔和配色

**Version**: 2.2 | **Last Updated**: 2026-01-05

---

## 📑 Table of Contents

- [Quick Start](#-quick-start)
- [Git & PR 規範](#-git--pr-規範)
- [Project Overview](#-project-overview)
- [Design System & Color Scheme](#-design-system--color-scheme)
- [File Structure](#-file-structure)
- [Architecture & Components](#-architecture--components)
- [Animation Library](#-animation-library)
- [Responsive Design](#-responsive-design)
- [JavaScript Functionality](#-javascript-functionality)
- [Key Conventions for AI Assistants](#-key-conventions-for-ai-assistants)
- [Development Workflow](#-development-workflow)
- [Common Pitfalls & Solutions](#-common-pitfalls--solutions)
- [Content Guidelines](#-content-guidelines)
- [Quick Color Reference](#-quick-color-reference)
- [Additional Context](#-additional-context)

---

## ⚡ Quick Start

### 新開發者 5 分鐘上手

1. **打開專案**
   ```bash
   # 直接用瀏覽器開啟 index.html（無需 build）
   open index.html
   ```

2. **核心檔案**
   - `index.html` - 網頁結構（單一檔案）
   - `base.css` - 色彩變數系統（**必讀**）
   - `script.js` - 互動邏輯（tab 切換、行程展開）

3. **設計原則** ⭐
   - 使用 **日系傳統色** + **柔和藍**，禁止隨意新增顏色
   - 價格文字用 **深金色 #8B7500**（淺色背景）
   - NBA 相關元素保留藍色，其他用自然色系

4. **快速修改樣式**
   ```css
   /* 修改價格顏色 → flight.css, itinerary.css */
   color: #8B7500; /* 深金色，高對比度 */

   /* 修改卡片背景 → tabs.css */
   background: var(--bg-card); /* 使用變數而非硬編碼 */
   ```

5. **注意事項**
   - ❌ 不要直接 commit 到 `main`
   - ✅ 建立 PR 時自動生成精簡描述（3-5 點）
   - ✅ 使用 Conventional Commits（`feat:`, `fix:`, `style:`）

---

## 🔧 Git & PR 規範

### Pull Request 規則
- **標題 (Title)**: 請清楚描述變更內容，格式使用 Conventional Commits (如 `feat: ...`, `fix: ...`)。
- **內文 (Body)**: **請務必保持精簡 (Keep it concise)**。
    - 不要寫長篇大論。
    - 只列出 3-5 個重點項目 (Bullet points) 說明改了什麼即可。
    - 不需要包含測試計畫或詳細背景，除非我特別要求。

### 指令偏好
- 建立 PR 時，請自動幫我生成標題與精簡的描述，不需要每次都問我內容。
- **必須提供可點擊的 PR 連結**，格式如下：

### PR 連結格式
當完成開發並準備建立 PR 時，請使用以下格式生成連結：

```
https://github.com/k125266/texas_trip/compare/main...<分支名稱>
```

**範例：**
```
https://github.com/k125266/texas_trip/compare/main...claude/create-claude-documentation-ex1dJ
```

此連結會自動開啟 GitHub 的 PR 建立頁面，並預設比較 `main` 分支與目標分支的差異。

---

## 📋 Project Overview

This is a single-page application for an 8-day, 7-night Texas basketball-themed road trip (德州8天7夜籃球主題自駕遊). The website provides a comprehensive travel itinerary from February 26 to March 5, 2026, covering Dallas, Austin, and San Antonio.

**Primary Purpose**: Travel planning and reference guide for a basketball-themed Texas road trip
**Technology Stack**: Pure HTML, CSS, JavaScript (no frameworks or build tools)
**Language**: Traditional Chinese (zh-TW) with some English elements

---

## 🎨 Design System & Color Scheme

### Japanese Traditional Colors with Muted Blue Accents

The design uses **Japanese traditional colors (日系傳統色)** for warmth and layered visual depth, combined with **muted blue tones (柔和藍色調)** for a refined, artsy aesthetic:

```css
:root {
    /* === Muted Blue System (日系柔和藍色) === */

    /* Primary Brand Blue - Tetsukon (鐵紺 / Iron Blue) */
    --tetsukon: #3A5B75;          /* Deep desaturated blue-gray, main brand color */
    --nando: #6C849D;             /* Grayish blue, interactive & secondary elements */

    /* Legacy Aliases (backward compatibility) */
    --mavs-royal-blue: var(--tetsukon);
    --mavs-navy-blue: #2B3E50;
    --mavs-light-blue: var(--nando);

    /* === Japanese Traditional Color System === */

    /* Base Colors (Background & Base) */
    --ecru: #F4F4F0;              /* 生成色 - Natural cotton/linen, main background */
    --glossy-silk: #EBE6D8;       /* 練色 - Aged paper color, secondary background */
    --bg-white: #FFFFFF;          /* Pure white - for cards */

    /* Nature Series (Nature & Freshness) */
    --young-grass: #B5CAA0;       /* 若草色 - Spring young grass green */
    --pale-blue-green: #AABCBF;   /* 水淺蔥 - Morning lake water color */
    --grayish-cherry: #D7C4BB;    /* 灰櫻 - Mature elegant pink */
    --wisteria-gray: #95A3C8;     /* 藤鼠 - Mysterious wisteria purple */

    /* Earth & Accent Colors */
    --mustard: #D8CA86;           /* 辛子色 - Mustard yellow, accent highlight */
    --walnut: #917B6D;            /* 胡桃色 - Warm walnut brown */
    --warm-gray: #84898C;         /* Warm gray - secondary text */
    --charcoal-blue: #2B313B;     /* Charcoal blue - primary text (not pure black) */

    /* Semantic Aliases (for convenience) */
    --bg-main: var(--ecru);
    --bg-card: var(--bg-white);
    --bg-secondary: var(--glossy-silk);
    --text-primary: var(--charcoal-blue);
    --text-secondary: var(--warm-gray);
    --text-tertiary: var(--walnut);
    --accent-primary: var(--mustard);
    --accent-nature: var(--young-grass);
    --brand-primary: var(--tetsukon);
    --brand-secondary: var(--nando);
    --border-color: rgba(145, 123, 109, 0.2);
    --shadow-color: rgba(47, 58, 76, 0.08);
}
```

### Visual Style Characteristics

1. **Background**: Warm gradient (生成色 `--ecru` to 練色 `--glossy-silk`) - natural cotton/paper warmth
2. **Cards**: Pure white (`--bg-white`) with walnut-tinted borders and soft neutral shadows
3. **Text Colors** (avoiding pure black for reduced eye strain):
   - Primary headings: Charcoal blue (`--charcoal-blue` #2B313B) - soft, readable depth
   - Secondary text: Warm gray (`--warm-gray` #84898C) - gentle readability
   - Tertiary elements: Walnut (`--walnut`) - warm accents
4. **Muted Blue Brand Color** (Tetsukon 鐵紺):
   - Primary: `--tetsukon` #3A5B75 - deep desaturated blue-gray
   - Secondary: `--nando` #6C849D - lighter grayish blue for hover states
   - Philosophy: Low-saturation blues feel premium, calm, and artsy (文青)
5. **Natural Color Accents**:
   - Hover states: Grayish cherry (`--grayish-cherry`), pale blue-green (`--pale-blue-green`)
   - Day badges: Young grass (`--young-grass`) gradient - spring freshness
   - Timeline elements: Young grass to pale blue-green gradient
   - Price tags: Mustard yellow (`--mustard`) - eye-catching highlights
6. **Basketball Elements** (Muted blue gradients):
   - Header section (Nando 納戶色 to Tetsukon 鐵紺)
   - Active tab buttons
   - NBA Day 4 card and badge
   - Flight path lines
7. **Budget Totals**: Wisteria gray to charcoal blue gradient - elegant and sophisticated
8. **Hover Effects**:
   - `translateY(-8px)` lift
   - Natural color-tinted shadows (cherry, grass, blue-green)
   - Border color changes to thematic natural colors
   - Subtle gradient backgrounds on hover
9. **Border Radius**: 15-25px for modern, friendly appearance
10. **Layered Backgrounds**: Multiple background tones (ecru, glossy-silk, white) create visual depth

### Typography

- **Primary Font**: Verdana (sans-serif)
- **Secondary Font**: 'Noto Serif TC' (Google Fonts) for Chinese characters
- **Icon Usage**: Flaticon images used for consistent visual elements (see Icon Reference below)

### Icon & Emoji Reference

All icons are sourced from Flaticon and replace traditional emojis for better consistency:

| Emoji | Icon URL | Usage |
|-------|----------|-------|
| 🚗 | `https://cdn-icons-png.flaticon.com/512/9709/9709678.png` | Transportation, car rental, driving |
| ✈️ | `https://cdn-icons-png.flaticon.com/512/12142/12142421.png` | Flights, airport, air travel |
| 📊 | `https://cdn-icons-png.flaticon.com/512/4481/4481249.png` | Statistics, overview tab |
| 🏨 | `https://cdn-icons-png.flaticon.com/512/8526/8526337.png` | Hotel, accommodation, check-in/out |
| 💡 | `https://cdn-icons-png.flaticon.com/512/6804/6804536.png` | Tips, reminders, suggestions |
| 🔒 | `https://cdn-icons-png.flaticon.com/512/8042/8042694.png` | Security, safety information |
| 🛍️ | `https://cdn-icons-png.flaticon.com/512/8730/8730692.png` | Shopping, outlets, stores |
| 🌐 | `https://cdn-icons-png.flaticon.com/512/12306/12306235.png` | Navigation, internet, global |
| 🌮 | `https://cdn-icons-png.flaticon.com/512/7649/7649437.png` | San Antonio, Mexican food |
| 🏀 | `https://cdn-icons-png.flaticon.com/512/7462/7462399.png` | Basketball, NBA events |
| 📍 | `https://cdn-icons-png.flaticon.com/512/7763/7763870.png` | Location, address, places |

**Icon Size Classes:**
- `.basketball-icon.large` - Large decorative icons (header)
- `.basketball-icon` - Standard size for buttons and cards
- `.basketball-icon.small` - Small inline icons
- `.basketball-icon.tiny` - Tiny icons for inline text (locations, tips)
- `.stat-icon-img` - Special size for statistics grid

---

## 📁 File Structure

```
texas_trip/
├── index.html           # Main HTML structure
├── base.css            # Core styles, CSS variables, animations
├── header.css          # Header, title, route line styles
├── tabs.css            # Tab navigation & overview page
├── itinerary.css       # Day cards & timeline components
├── other-pages.css     # Accommodation & tips pages
├── script.js           # Tab switching & day expansion logic
└── CLAUDE.md           # This documentation file
```

### File Organization Philosophy

**Modular CSS**: Each CSS file handles a specific component or page section:
- **base.css**: Foundation (variables, reset, animations, scrollbar)
- **header.css**: Everything above the tab navigation
- **tabs.css**: Tab buttons and overview tab content
- **itinerary.css**: Day-by-day itinerary page
- **other-pages.css**: Accommodation and tips tabs

**Load Order**: CSS files are loaded in dependency order in `<head>`:
```html
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="header.css">
<link rel="stylesheet" href="tabs.css">
<link rel="stylesheet" href="itinerary.css">
<link rel="stylesheet" href="other-pages.css">
```

---

## 🏗️ Architecture & Components

### 1. Header Component (`header.css`)

**Class**: `.compact-header`
- Travel decoration emojis (floating animation)
- Title wrapper with bouncing emoji decorations
- Route line showing travel path: 台北 → Dallas → Austin → San Antonio
- Subtitle with date information

**Key Animations**:
- `float-random`: Floating decorative emojis
- `bounce-gentle`: Title decoration bounce effect

### 2. Tab Navigation (`tabs.css`)

**Component**: `.tab-nav` with `.tab-btn` buttons
- 4 tabs: Overview (總覽), Days (行程), Accommodation (住宿), Tips (提醒)
- Active state with gradient background
- JavaScript-controlled via `showTab(tabName)` function

**Tab Content Areas**:
- `#overview`: Budget overview, flight info, car rental, airport hero image
- `#days`: 8 expandable day cards with timeline
- `#accommodation`: 3 accommodation cards (Dallas, Austin, San Antonio)
- `#tips`: 6 travel tip cards in grid layout

### 3. Overview Page Components (`tabs.css`)

**Airport Hero**:
- Full-width image with gradient overlay
- Dallas Fort Worth Airport featured image

**Info Cards** (`.info-card`):
- Flight information
- Car rental (Tesla Model 3 with FSD)
- Exchange rate display

**Budget Display** (`.budget-display`):
- Itemized budget breakdown
- Per-person costs in NTD
- Total: NTD 131,715 per person

### 4. Itinerary System (`itinerary.css` + `script.js`)

**Day Cards** (`.day-card`):
- Collapsible/expandable cards (click to toggle)
- Special styling for Day 4 (NBA game day): `.nba-card` with pulse-glow animation
- Each card contains timeline of activities

**Timeline Component**:
- 3-column grid: time | line | content
- Circular time markers with pulse animation
- Vertical connecting line between activities
- Color-coded: Blue for normal, Orange for NBA events

**Special Day Markers**:
- **Day 4 NBA Event**: Orange gradient, basketball animations
- **Day 8 Return Flight**: Silver-tinted styling

**Data Structure** (`script.js`):
```javascript
dayData = {
    1: {
        activities: [{ time, title, desc, price, isNBA?, isReturn? }],
        budget: 'NTD amount'
    }
}
```

### 5. Accommodation Page (`other-pages.css`)

**Layout**: 3-column responsive grid
- Dallas (4 nights): $21,815 NTD
- Austin (1 night): $5,685 NTD
- San Antonio (2 nights): $11,725 NTD

**Card Elements**:
- City emoji header
- Address and details
- Price tag in orange

### 6. Tips Page (`other-pages.css`)

**Grid Layout**: 3 columns (responsive: 2 cols @ 1024px, 1 col @ 600px)

**6 Tip Cards**:
1. Tipping (💵)
2. Safety (🔒)
3. Shopping (🛍️)
4. Navigation (🌐)
5. Power/Voltage (🔌)
6. Insurance (🛡️)

---

## ✨ Animation Library

All animations defined in `base.css`:

| Animation Name | Purpose | Duration | Effect |
|---------------|---------|----------|--------|
| `fadeIn` | Page load transitions | 0.5s | Opacity + translateY |
| `pulse-glow` | NBA card highlight | 2s | Orange glow pulsing |
| `pulse-circle` | Timeline circles | 2s | Scale pulsing |
| `basketball-bounce` | Day 4 NBA badge | 1s | Vertical bounce |
| `basketball-spin` | NBA timeline marker | 3s | 360° rotation |
| `float-random` | Header decorations | 6s | Float + rotate |
| `bounce-gentle` | Title emojis | 2s | Gentle bounce |

**Usage Pattern**: Apply to elements with appropriate class or state (e.g., `.nba-card`)

---

## 📱 Responsive Design

### Breakpoints

```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Large mobile */ }
@media (max-width: 600px)  { /* Tips grid */ }
@media (max-width: 480px)  { /* Small mobile */ }
```

### Responsive Strategies

1. **Font Scaling**: Reduce font sizes at smaller breakpoints
2. **Grid Collapse**: Multi-column grids become single column
3. **Padding Reduction**: Less padding on mobile (25px → 20px → 15px)
4. **Route Line**: Changes from horizontal to vertical layout on mobile
5. **Tab Buttons**: Stack vertically on very small screens

---

## 🔧 JavaScript Functionality

### Tab Switching (`showTab(tabName)`)

```javascript
function showTab(tabName) {
    // Remove active class from all content
    // Remove active class from all buttons
    // Add active to selected tab
    // Add active to clicked button
}
```

**Event Binding**: Inline `onclick` attributes on tab buttons

### Day Card Expansion (`toggleDay(day)`)

```javascript
function toggleDay(day) {
    // Close other expanded cards
    // Toggle current card
    // Generate timeline HTML from dayData
    // Insert into day-card-content
}
```

**Dynamic HTML Generation**:
- Reads from `dayData` object
- Creates timeline items with special classes for NBA/return items
- Adds budget footer

---

## 🎯 Key Conventions for AI Assistants

### When Modifying Styles

1. **Always use Japanese traditional color variables** - Never introduce arbitrary colors
   - Use semantic aliases: `--bg-main`, `--bg-card`, `--text-primary`, etc.
   - Reference traditional colors by their names: `--ecru`, `--young-grass`, `--mustard`, etc.
   - Reserve Mavericks blue (`--mavs-royal-blue`, etc.) ONLY for basketball-themed elements
2. **Maintain gradient direction**: Use `135deg` for consistency
3. **Preserve animation timing**: Existing animations are carefully balanced
4. **Keep border-radius values**: 15-25px range for cards
5. **Follow contrast guidelines for price/emphasis colors**:
   - Use **deep gold (#8B7500)** for price text on white/light backgrounds (航班資訊, 行程價格)
   - Use **mustard yellow (#D8CA86)** for decorative labels on dark backgrounds
   - Use **orange (#FFA500)** for interactive hover states requiring high visibility
6. **Layer backgrounds for depth**: Combine `--ecru`, `--glossy-silk`, and `--bg-white` for visual hierarchy
7. **Natural color hover states**: Use `--grayish-cherry`, `--pale-blue-green`, or `--young-grass` for different card types
8. **Ensure text readability**:
   - Use multi-layer text-shadow for white text over complex backgrounds
   - NBA badge requires white text (#fff) for contrast against dark blue gradient
   - Regular day badges use charcoal blue for contrast against light gradients

### When Adding Content

1. **Use appropriate emojis**: Keep the travel/basketball theme
2. **Maintain Chinese language**: All user-facing text in Traditional Chinese
3. **Follow timeline structure**: Use existing `dayData` format
4. **Keep budget formatting**: "NTD X,XXX" or "$X ≈ NTD X,XXX"

### When Modifying JavaScript

1. **Event handling is inline**: Use `onclick` attributes in HTML
2. **Data is in `dayData` object**: Don't fetch from external sources
3. **DOM manipulation is vanilla JS**: No jQuery or frameworks
4. **Maintain single-page architecture**: All content in one HTML file

### Responsive Design Rules

1. **Mobile-first approach**: Ensure readability on small screens
2. **Touch targets**: Buttons should be at least 44px tap target
3. **Grid auto-fit**: Use `repeat(auto-fit, minmax(300px, 1fr))`
4. **Test at 480px**: This is the critical small mobile breakpoint

---

## 🚀 Development Workflow

### Making Changes

1. **Edit CSS files** based on component responsibility
2. **Test in browser** - No build step required
3. **Check responsive** at different breakpoints
4. **Verify animations** are smooth
5. **Test tab/day switching** functionality

### Adding New Days

1. Add new day card HTML in `#days` section
2. Add corresponding `dayData[N]` entry in `script.js`
3. Include timeline items with proper structure
4. Assign budget value

### Adding New Tabs

1. Create tab button in `.tab-nav`
2. Create corresponding `.tab-content` div with unique ID
3. Add `showTab('new-id')` to button onclick
4. Style new content area

---

## 🐛 Common Pitfalls & Solutions

### Issue: Animations not working
**Solution**: Check that `base.css` is loaded first and animation names match

### Issue: Timeline not displaying correctly
**Solution**: Verify 3-column grid structure: `grid-template-columns: 80px 4px 1fr`

### Issue: Colors look different
**Solution**: Always use CSS variables, never hardcode colors except for orange accent

### Issue: Cards not hovering properly
**Solution**: Ensure `transition: all 0.3s` is present and z-index is not interfering

### Issue: Day content not expanding
**Solution**: Check that `toggleDay()` is called with correct day number and content div exists

---

## 📝 Content Guidelines

### Budget Information
- Always show both USD and NTD: `$XX ≈ NTD X,XXX`
- Exchange rate: $1 ≈ NTD 32
- Format large numbers with commas: `131,715`

### Location Information
- Include address with 📍 icon (Flaticon location marker)
- Show driving time and distance
- Note parking availability and cost

### Time Format
- Use 24-hour format: `19:20`
- Show duration for activities: `13:30-17:00`

### Icon Usage
- Consistent icons for categories (see Icon Reference table above)
- Use Flaticon images instead of emojis for UI elements
- Icon classes: `.basketball-icon`, `.basketball-icon.small`, `.basketball-icon.tiny`
- Examples: ✈️ flights, 🏨 accommodation, 🚗 driving, 🏀 NBA events, 📍 locations
- Food emojis (🍽️🍕🍸) can remain as text emojis in descriptions

---

## 🔍 File Cross-Reference

### Styles Affecting Header
- `base.css`: Global variables, body background
- `header.css`: All header components

### Styles Affecting Itinerary
- `base.css`: Animations (pulse, bounce, spin)
- `itinerary.css`: Day cards, timeline, badges

### Scripts Affecting Display
- `script.js`: All interactivity (no external dependencies)

### Fonts & External Resources
- Google Fonts: `Noto Serif TC`
- Airport Image: `https://suffolk.com/.../DFW-terminal-C-thumbnail.jpg`

---

## 🎨 Quick Color Reference

```css
/* === Japanese Traditional Color Palette with Muted Blue === */

/* Backgrounds (Base Layers) */
body background: linear-gradient(135deg, #F4F4F0 0%, #EBE6D8 50%, #F4F4F0 100%)
  /* 生成色 (ecru) → 練色 (glossy-silk) warm gradient */
card background: #FFFFFF (pure white)
secondary background: #EBE6D8 (--glossy-silk, 練色)
day card inner: linear-gradient(135deg, #EBE6D8 0%, rgba(235,230,216,0.5) 100%)
  /* 練色 gradient with border-top for visual separation */

/* Borders */
normal border: 2px solid rgba(145,123,109,0.2) (--border-color, walnut-tinted)
hover border - cherry: 2px solid #D7C4BB (--grayish-cherry, 灰櫻)
hover border - grass: 2px solid #B5CAA0 (--young-grass, 若草色)
hover border - water: 2px solid #AABCBF (--pale-blue-green, 水淺蔥)
special border: 3px solid #EBE6D8 (--glossy-silk, 練色)
NBA/brand border: 3px solid #3A5B75 (--tetsukon, 鐵紺)

/* Text Colors (not pure black for reduced eye strain) */
primary text: #2B313B (--charcoal-blue, 炭藍色)
secondary text: #84898C (--warm-gray, 暖灰色)
tertiary text: #917B6D (--walnut, 胡桃色)
white text on blue: rgba(255,255,255,0.85-0.9) /* High contrast for readability */

/* Muted Blue Brand Colors (文青柔和藍) */
brand primary: #3A5B75 (--tetsukon, 鐵紺 - Iron Blue)
brand secondary: #6C849D (--nando, 納戶色 - Grayish Blue)
brand dark: #2B3E50 (--mavs-navy-blue, darker tetsukon variant)

/* Accent Colors */
price/emphasis (decorative): #D8CA86 (--mustard, 辛子色 - mustard yellow)
price/emphasis (high contrast): #8B7500 (deep gold - for text on light backgrounds)
price background (mustard): rgba(216,202,134,0.2) with border rgba(216,202,134,0.3)
price background (deep gold): rgba(184,150,10,0.15) with border rgba(184,150,10,0.3)

/* Contrast Guidelines */
- Use #8B7500 (deep gold) for price text on white/light backgrounds (航班、行程價格)
- Use #D8CA86 (mustard) for decorative elements and labels on dark backgrounds
- Use #FFA500 (orange) for interactive hover states that need high visibility

/* Shadows */
normal shadow: 0 4px 12px rgba(47,58,76,0.08) (--shadow-color)
hover shadow - cherry: 0 12px 28px rgba(215,196,187,0.35) /* 灰櫻 tint */
hover shadow - grass: 0 12px 28px rgba(181,202,160,0.3) /* 若草色 tint */
hover shadow - water: 0 12px 28px rgba(170,188,191,0.3) /* 水淺蔥 tint */
hover shadow - wisteria: 0 12px 28px rgba(149,163,200,0.4) /* 藤鼠 tint */
brand shadow: 0 8px 24px rgba(58,91,117,0.3) /* Muted blue shadow */

/* Gradients - Nature Series */
day badge (normal): linear-gradient(135deg, #B5CAA0 0%, #AABCBF 100%)
  /* 若草色 → 水淺蔥 */
timeline elements: linear-gradient(to bottom, #AABCBF, rgba(215,196,187,0.4))
  /* 水淺蔥 → 灰櫻 fade */
budget total: linear-gradient(135deg, #95A3C8, #2B313B)
  /* 藤鼠 → 炭藍色 */

/* Gradients - Muted Blue Brand Elements */
header background: linear-gradient(135deg, #6C849D 0%, #3A5B75 100%)
  /* 納戶色 → 鐵紺 */
active tab: linear-gradient(135deg, #6C849D 0%, #3A5B75 100%)
  /* 納戶色 → 鐵紺 */
NBA badge: linear-gradient(135deg, #3A5B75 0%, #2B3E50 100%)
  /* 鐵紺 → darker variant */
NBA card background: linear-gradient(135deg, rgba(108,132,157,0.15), rgba(58,91,117,0.1))
  /* Muted blue tint */
flight elements: rgba(58,91,117,0.3-0.5) /* Terminal info, airport codes */

/* Hover State Backgrounds */
tab button hover: #D7C4BB (--grayish-cherry, 灰櫻)
budget row hover: #AABCBF (--pale-blue-green, 水淺蔥)
weather item hover: #AABCBF (--pale-blue-green, 水淺蔥)
info card hover: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(181,202,160,0.1) 100%)
  /* white → 若草色 subtle tint */
route segment hover distance: #FFA500 (orange) with text-shadow glow
  /* 0 0 8px rgba(255,165,0,0.5) */

/* Journey Cards (City Themes) */
journey days label: #D8CA86 (--mustard, 辛子色)
journey city names: #fff with multi-layer text-shadow for readability
  /* 0 2px 8px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5) */
journey highlights badge: rgba(181,202,160,0.9) with #2B313B text
  /* 若草色 background, 炭藍色 text */
journey highlights badge hover: #B5CAA0 (--young-grass, 若草色)

/* Scrollbar */
scrollbar track: #F4F4F0 (--ecru, 生成色)
scrollbar thumb: linear-gradient(180deg, #917B6D 0%, #84898C 100%)
  /* 胡桃色 → 暖灰色 */
scrollbar thumb hover: #2B313B (--charcoal-blue, 炭藍色)
```

---

## 🛠️ Maintenance Notes

### Performance Considerations
- All assets are minimal (total CSS < 20KB)
- Single external image (airport hero)
- No JavaScript frameworks or libraries
- Animations use GPU-accelerated properties (transform, opacity)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox required
- Backdrop-filter may not work in older browsers
- Custom scrollbar styling is WebKit-specific

### Accessibility Notes
- Contrast ratios should be verified for text on gradient backgrounds
- Interactive elements have hover states
- Consider adding ARIA labels for screen readers
- Emoji-only buttons may need text alternatives

---

## 📚 Additional Context

### Trip Details
- **Duration**: 8 days, 7 nights (2026/2/26-3/5)
- **Route**: Taipei → Dallas (4 nights) → Austin (1 night) → San Antonio (2 nights) → Taipei
- **Highlight**: NBA game (Mavericks vs Thunder) on Day 4
- **Transportation**: Tesla Model 3 rental with Full Self-Driving (FSD)
- **Total Budget**: ~NTD 131,715 per person

### Design Inspiration

The design philosophy combines **Japanese traditional colors (日系傳統色)** with **Dallas Mavericks basketball theme**:

1. **Japanese Traditional Aesthetics**:
   - Uses authentic traditional color names (生成色, 練色, 若草色, 水淺蔥, 灰櫻, 藤鼠, 辛子色, 胡桃色, 素鼠, 鐵御納戶)
   - Creates warmth and depth through layered backgrounds (ecru, glossy-silk, white)
   - Natural, muted tones evoke a sense of calm, sophistication, and literary culture (文青感)
   - Avoids harsh pure whites and blacks in favor of warm neutrals

2. **Basketball Theme Integration**:
   - **Mavericks blue** reserved exclusively for basketball-related elements:
     - Header section
     - Active navigation states
     - NBA Day 4 special card and badge
   - Blue acts as strategic "accent points" rather than overwhelming the entire design

3. **Visual Hierarchy**:
   - Multiple background layers create subtle depth perception
   - Natural color gradients for hover states guide user interaction
   - Mustard yellow (辛子色) draws attention to pricing and important information
   - Different natural colors for different card types maintain visual interest

4. **UI Contrast & Accessibility Refinements** (2026-01-04):
   - **Deep Gold for High Contrast**: Introduced #8B7500 (deep gold) for price text on light backgrounds
     - Replaces low-contrast mustard yellow (#D8CA86) in航班資訊 and 行程價格
     - Ensures WCAG AA compliance for text readability
   - **Multi-layer Text Shadows**: Enhanced journey card city names with 3-layer shadows for better readability over complex backgrounds
   - **Visual Separation**: Added gradient backgrounds and borders to `.day-card-inner` to clearly distinguish expanded content from card headers
   - **Interactive Feedback**: Orange (#FFA500) glow effect on route segment distance text during hover for better UX
   - **Layout Improvements**: Centered standalone rental car card to prevent awkward left-aligned appearance
   - **Badge Contrast**: NBA badge uses white text (#fff) while regular day badges use charcoal blue for appropriate contrast ratios

This approach resolves the "too blue/too heavy" (太藍太沈重) feedback while preserving the basketball identity and adding Japanese aesthetic warmth. Subsequent contrast improvements ensure accessibility without compromising the refined aesthetic.

---

## 📝 Version History

### **Version 2.2** (2026-01-05) - Interactive Travel Planning Features
**新增功能：**
- ✨ **翻書模式**：實現全螢幕行程瀏覽，支援左右方向鍵切換、ESC 關閉
- ✅ **行前準備清單**：11 項互動式待辦事項，支援勾選與 localStorage 狀態保存
- 🎒 **行李打包清單**：5 大類別（證件、衣物、電子、生活、特殊），每項包含針對行程的特別說明
- 💡 **重要提醒卡片**：NBA Clear Bag Policy、乾燥氣候對策、車內導航建議

**檔案變更：**
- `index.html`: 新增翻書介面、準備清單、打包清單 HTML 結構
- `script.js`: 新增翻書模式邏輯、鍵盤導航、清單狀態管理
- `book.css`: 新增旅遊手冊風格樣式（雙欄式排版）
- `other-pages.css`: 新增清單與提醒卡片樣式

### **Version 2.1** (2026-01-04) - UI Contrast & Accessibility Refinements
**改進項目：**
- 深金色文字 (#8B7500) 提升價格資訊對比度
- 多層次文字陰影增強可讀性
- 視覺分隔與梯度背景優化
- NBA 徽章與一般日期徽章對比度調整

---

**Maintained By**: AI Assistant (Claude)
