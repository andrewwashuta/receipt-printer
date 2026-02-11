# Receipt Printer Portfolio

A unique portfolio website styled as a thermal receipt printer, built with Astro. Features an animated printing effect, authentic receipt typography, and printer sound effects.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/andrewwashuta/receipt-printer.git
cd receipt-printer

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: Inline CSS with receipt printer aesthetic
- **Deployment**: Vercel
- **Fonts**: VT323 (receipt-style monospace), Geist Pixel (headers/accents)
- **Analytics**: Vercel Analytics

## 🎨 Features

- **Animated Printing Effect**: Line-by-line printing animation that simulates a thermal receipt printer
- **Printer Sounds**: Authentic printer startup and printing sound effects (toggleable)
- **Thermal Portrait**: Dithered image conversion using Canvas API for authentic thermal printer look
- **Receipt Typography**: Monospace font styling with proper receipt formatting
- **Dynamic Content**: Auto-generated date and order number
- **Cursor Effect**: Inverse cursor dot for desktop users
- **Print Functionality**: Browser print dialog integration for physical printing

## 📁 Project Structure

```
src/
├── layouts/
│   └── ReceiptLayout.astro    # Main layout with meta tags and global styles
├── pages/
│   └── index.astro             # Receipt printer page
└── assets/
    └── index/
        └── images/
            └── andrewwashuta.png  # Portrait image for thermal dithering

public/
├── fonts/                      # Geist Pixel font variants
├── sounds/                     # Printer sound effects
└── favicon.svg
```

## 🔊 Sound Effects

The receipt printer includes authentic sound effects:
- `printer-startup.mp3` - Plays when printing begins
- `printing.mp3` - Continuous printing sound
- `Tear-*.mp3` - Receipt tear sounds

Sounds can be toggled on/off via the `[ AUDIO: ON/OFF ]` button.

## 🖨️ Print Functionality

The receipt is optimized for printing:
- Use browser print dialog (Cmd/Ctrl + P)
- Receipt styling is preserved in print view
- Thermal printer aesthetic maintained on paper

## 🚀 Deployment

This project is deployed on Vercel. The build process generates static files optimized for performance.

## 📝 License

This project is for personal use and portfolio purposes.
