# Receipt Printer Portfolio

A portfolio website styled as a thermal receipt printer, built with Astro. Features an animated line-by-line printing effect, tearable receipt pieces, freehand draw-to-cut, washi tape, drag mode for repositioning pieces, authentic printer sound effects, and five OKLCH color themes with animated transitions.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or bun

### Installation
```bash
git clone https://github.com/andrewwashuta/receipt-printer.git
cd receipt-printer

npm install
```

### Development
```bash
npm run dev
npm run build
npm run preview
```

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Deployment**: Vercel
- **Fonts**: Berkeley Mono (receipt monospace), MD Thermochrome (toolbar icons)
- **Audio**: Web Audio API with HTMLAudio fallback for tear sounds

## Features

- **Printing Animation**: Line-by-line thermal printing with cursor blink and sound
- **Tearable Receipt**: Swipe across the receipt to tear it into pieces with jagged edges and canvas-generated fiber grain textures
- **Draw to Cut**: Freehand draw a line across the receipt to cut it with jagged edges, shimmer trail, and inset shadow. Supports multi-pass zigzag cuts in a single stroke and re-cutting already-cut pieces. Forgiving entry/exit detection for mobile (toggle with X key)
- **Washi Tape**: Draw decorative tape strips across torn pieces to tape them back together (toggle with W key)
- **Drag Mode**: Drag and fling torn receipt pieces with physics-based momentum and viewport clamping (toggle with H key)
- **Sound Effects**: Tear sounds with multiple variations, audio context unlock for mobile Safari
- **Thermal Portrait**: Dithered image using Canvas API for authentic thermal printer look
- **Cursor Dot**: Inverse blend-mode cursor with proximity-based sizing near tear edges (desktop)
- **Mobile Optimized**: Passive touch events, reduced GPU layers, single-layer grain textures, layout caching
- **Color Themes**: Five OKLCH-based themes (Parchment, Midnight, Carbon, Terracotta, Forest) with a circular View Transition reveal animation and feathered edge. Theme persists via localStorage
- **Toolbar**: Desktop (top-right, vertical) and mobile (bottom-center, horizontal) with hover labels, mode hints, and a theme toggle dot

## Project Structure

```
src/
  layouts/
    ReceiptLayout.astro     # Layout with meta tags, global styles, CSS custom properties, and theme definitions
  pages/
    index.astro             # Entire app (markup, styles, ~4500 lines of JS)
  assets/
    index/images/
      andrewwashuta.png     # Portrait for thermal dithering

public/
  fonts/                    # Berkeley Mono, MD Thermochrome
  sounds/                   # Tear-1.mp3 through Tear-4.mp3
  favicon.svg
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| S   | Toggle sound |
| W   | Toggle washi tape mode |
| C   | Clear all tape |
| X   | Toggle draw-to-cut mode |
| H   | Toggle drag mode |
| R   | Reset receipt |

## Deployment

Deployed on Vercel via `@astrojs/vercel` adapter. Static pages are prerendered at build time.

## License

This project is for personal use and portfolio purposes.
