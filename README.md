# 🎵 The Main Stage — A Concert-Themed Restaurant Page

A dynamic, music-inspired restaurant menu page built with vanilla JavaScript and bundled with Webpack. Every dish on the menu is a tribute to a beloved artist.

## 🌐 Live Demo

[View the live site](https://lydiahmbugua.github.io/restaurant-page/)

## 🍽️ Features

- **Three-section menu** — Opening Acts (starters), Main Acts (mains), and After Party (desserts & drinks)
- **Artist-inspired dishes** — each menu item is themed around a real musician, from Bien's Mama Oliech's Headliner to Billie Eilish's vegan ramen
- **Dynamic DOM rendering** — all content is built and injected via JavaScript, no static HTML menus
- **Single page navigation** — Home, Menu, and Contact tabs rendered without page reloads

## 🛠️ Built With

- Vanilla JavaScript (ES6+ classes and modules)
- Webpack 5
- CSS
- HTML Webpack Plugin

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/lydiahmbugua/restaurant-page.git
cd restaurant-page
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 📦 Deploying to GitHub Pages

```bash
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

## 📁 Project Structure

```
restaurant-page/
├── src/
│   ├── index.js        # Entry point
│   ├── menu.js         # Menu items and DOM rendering
│   ├── home.js         # Home page
│   ├── contact.js      # Contact page
│   ├── template.html   # HTML template
│   ├── style.css       # Styles
│   └── images/         # Artist/dish images
├── dist/               # Webpack output (not tracked)
└── webpack.config.js
```

Images sourced from Pinterest
