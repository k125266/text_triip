# CLAUDE.md - Texas Trip Website Documentation

## 📋 Project Overview

This is a single-page application for an 8-day, 7-night Texas basketball-themed road trip (德州8天7夜籃球主題自駕遊). The website provides a comprehensive travel itinerary from February 26 to March 5, 2026, covering Dallas, Austin, and San Antonio.

**Primary Purpose**: Travel planning and reference guide for a basketball-themed Texas road trip
**Technology Stack**: Pure HTML, CSS, JavaScript (no frameworks or build tools)
**Language**: Traditional Chinese (zh-TW) with some English elements

---

## 🎨 Design System & Color Scheme

### Official Dallas Mavericks Color Palette

The entire design is based on the **Dallas Mavericks** official team colors:

```css
:root {
    --mavs-royal-blue: #0053BC;  /* Primary brand color */
    --mavs-navy-blue: #002B5C;   /* Dark backgrounds */
    --mavs-silver: #BBC4CA;      /* Secondary text */
    --mavs-black: #061922;       /* Deep backgrounds */
}
```

### Accent Colors
- **Orange**: `#FFA500` - Used for highlights, prices, NBA events, and interactive elements
- **Gradients**: Navy to royal blue (`135deg` angle is preferred)

### Visual Style Characteristics

1. **Background**: Dark gradient (`--mavs-black` to `--mavs-navy-blue`) with `background-attachment: fixed`
2. **Cards**: Semi-transparent navy backgrounds with royal blue borders
3. **Glassmorphism**: `backdrop-filter: blur(10px)` used for overlay effects
4. **Shadows**: Blue-tinted shadows (`rgba(0, 83, 188, 0.4-0.7)`) for depth
5. **Hover Effects**:
   - `translateY(-5px)` lift
   - Enhanced box-shadow
   - Border color changes to royal blue or orange
6. **Border Radius**: 12-25px for modern, rounded appearance

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

1. **Always use the Mavericks color variables** - Never introduce arbitrary colors
2. **Maintain gradient direction**: Use `135deg` for consistency
3. **Preserve animation timing**: Existing animations are carefully balanced
4. **Keep border-radius values**: 12-25px range for cards
5. **Use orange (#FFA500) for emphasis**: Prices, highlights, special events

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
/* Backgrounds */
body background: linear-gradient(135deg, #061922 0%, #002B5C 100%)
card background: linear-gradient(135deg, rgba(0,43,92,0.6) 0%, rgba(0,43,92,0.4) 100%)
header background: linear-gradient(135deg, #002B5C 0%, #0053BC 50%, #0066CC 100%)

/* Borders */
normal border: 2px solid rgba(0,83,188,0.4)
hover border: 2px solid #0053BC
active/special border: 2px solid #FFA500

/* Text Colors */
primary text: #fff
secondary text: #BBC4CA (--mavs-silver)
emphasis/price: #FFA500 (orange)

/* Shadows */
normal shadow: 0 10px 30px rgba(0,83,188,0.5)
heavy shadow: 0 15px 50px rgba(0,83,188,0.5)
glow effect: 0 0 20px rgba(255,165,0,0.5)
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
The entire design is themed around the **Dallas Mavericks** basketball team, incorporating their official colors and basketball-related animations to create a cohesive sports-travel experience.

---

**Last Updated**: 2026-01-02
**Version**: 1.0
**Maintained By**: AI Assistant (Claude)
