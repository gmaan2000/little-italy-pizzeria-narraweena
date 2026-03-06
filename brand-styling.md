# Little Italy Pizzeria — Brand Styling Guide

> Extracted from customer inspiration images (IMG_1537–1540)

---

## 🎨 Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary Red** | Deep Terracotta Red | `#C41E24` | Headlines, buttons, key accents, logo |
| **Accent Gold** | Warm Italian Gold | `#D4A843` | Decorative details, borders, section dividers |
| **Italian Green** | Flag Green | `#2D7A3A` | Secondary accent, badges, "fresh" indicators |
| **Background Dark** | Charcoal/Almost Black | `#1A1A1A` | Menu boards, dark sections, footer |
| **Background Light** | Warm Off-White | `#FAF7F2` | Page background, card backgrounds |
| **Text Primary** | Pure White | `#FFFFFF` | Text on dark backgrounds |
| **Text Dark** | Dark Charcoal | `#2D2D2D` | Text on light backgrounds |
| **Accent Yellow** | Bright Italian Yellow | `#F5C518` | Stars, highlights, price callouts |

### Gradient Usage
- **Hero overlays**: Dark charcoal to transparent (`#1A1A1A → transparent`)
- **Section backgrounds**: Subtle warm gradient (`#FAF7F2 → #F0EBE3`)
- **CTA buttons**: Red gradient (`#C41E24 → #A0171D`)

---

## ✏️ Typography

### Primary Heading Font
- **Style**: Bold condensed sans-serif (all uppercase)
- **Reference**: Similar to **Oswald**, **Bebas Neue**, or **Anton**
- **Usage**: Main headings, menu category titles, hero text
- **Weight**: 700 (Bold)
- **Transform**: `uppercase`
- **Letter-spacing**: `0.05em` to `0.1em`

### Secondary Font
- **Style**: Clean geometric sans-serif
- **Reference**: Similar to **Montserrat**, **Open Sans**, or **Lato**
- **Usage**: Menu items, descriptions, body text, navigation
- **Weight**: 400 (Regular), 600 (Semi-bold for emphasis)

### Accent/Script Font (optional)
- **Style**: Handwritten or Italian-style script
- **Reference**: Similar to **Pacifico**, **Great Vibes**, or **Sacramento**
- **Usage**: Taglines, "Authentic Italian" callouts, decorative text
- **Weight**: 400

### Google Fonts to Import
```css
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&family=Pacifico&display=swap');
```

---

## 📐 Menu Display Style

From the inspo images — the in-store menu boards:

### Layout Characteristics
- **Dark background** (charcoal/black) with white text
- **Columns**: 2-3 column grid layout for menu categories
- **Category headers**: Bold condensed uppercase in white or gold
- **Item names**: Clean sans-serif, left-aligned
- **Prices**: Right-aligned, same line as item name, bold
- **Descriptions**: Smaller, lighter weight text below item name (italic or regular)
- **Dividers**: Thin gold/yellow lines or decorative dots between sections
- **Spacing**: Generous padding between categories

### Web Adaptation
- Keep the dark board aesthetic as a design element
- Use card-based layout per category on desktop
- Stack to single column on mobile
- Maintain the "authentic Italian chalkboard" feel

---

## 🖼️ Photography & Imagery Style

Based on the mural/signage in the inspo images:

### Style Direction
- **Warm, inviting tones** — golden lighting, Mediterranean feel
- **Authentic, not stock** — real food, real restaurant, candid feel
- **Italian heritage imagery** — murals, Italian landscapes, traditional elements
- **Close-up food shots** — vibrant colors, ingredients visible
- **Ambient restaurant photos** — warm lighting, cozy atmosphere

### Key Visual Elements from Inspo
- Italian village/countryside mural artwork (wall art in restaurant)
- Traditional Italian color blocking (green-white-red)
- Handpainted signage aesthetic
- Menu showcase display boards (dark background)

---

## 🏗️ UI Component Styles

### Buttons
- **Primary**: Red background (`#C41E24`), white text, bold uppercase, rounded corners (8px)
- **Secondary**: Transparent with gold border, gold text
- **Hover**: Darken 10%, subtle scale transform (1.02)

### Cards
- **Light theme**: White bg, subtle shadow, thin gold/red border accent on top
- **Dark theme**: Charcoal bg, white text, gold divider accent

### Navigation
- **Style**: Clean, minimal, dark background
- **Logo**: Centered or left-aligned
- **Links**: Uppercase, condensed font, letter-spaced
- **Active state**: Red underline or gold underline

### Footer
- **Dark charcoal** background
- **Gold accents** for dividers
- **Both branch addresses** clearly displayed

---

## 📱 Responsive Breakpoints

| Breakpoint | Usage |
|-----------|-------|
| Mobile | `< 768px` — Single column, stacked layout |
| Tablet | `768px – 1024px` — Two column menu, adjusted hero |
| Desktop | `> 1024px` — Full layout, multi-column menu |

---

## 🇮🇹 Brand Personality Keywords
- **Authentic** • **Traditional** • **Warm** • **Family** • **Italian Heritage**
- **Bold Typography** • **Rich Colors** • **Modern Execution** • **Classic Italian Soul**
