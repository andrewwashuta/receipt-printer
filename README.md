# Receipt Printer Portfolio

A portfolio website styled as a thermal receipt printer, built with Astro. Features an animated line-by-line printing effect, tearable receipt pieces, washi tape, drag mode for repositioning pieces, and authentic printer sound effects.

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
- **Washi Tape**: Draw decorative tape strips across torn pieces to tape them back together (toggle with W key)
- **Drag Mode**: Drag and fling torn receipt pieces with physics-based momentum and viewport clamping (toggle with H key)
- **Sound Effects**: Tear sounds with multiple variations, audio context unlock for mobile Safari
- **Thermal Portrait**: Dithered image using Canvas API for authentic thermal printer look
- **Cursor Dot**: Inverse blend-mode cursor with proximity-based sizing near tear edges (desktop)
- **Mobile Optimized**: Passive touch events, reduced GPU layers, single-layer grain textures, layout caching
- **Toolbar**: Desktop (top-right, vertical) and mobile (bottom-center, horizontal) with hover labels and mode hints

## Project Structure

```
src/
  layouts/
    ReceiptLayout.astro     # Layout with meta tags and global styles
  pages/
    index.astro             # Entire app (markup, styles, ~3400 lines of JS)
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
| H   | Toggle drag mode |
| R   | Reset receipt |

## Deployment

Deployed on Vercel via `@astrojs/vercel` adapter. Static pages are prerendered at build time.

## License

This project is for personal use and portfolio purposes.
