// loadPage.js
import { initSlideshow, createSlideshow } from './slides.js';
import { loadImageList } from './image-loader.js';

export default function loadPage() {
  const app = document.getElementById('app');

  // Header
  const header = document.createElement('header');
  header.innerHTML = '<h1>Galería de Imágenes</h1>';

  // Main content
  const main = document.createElement('main');
  const slideshowWrapper = document.createElement('div');
  slideshowWrapper.className = 'slideshow-wrapper';
  main.appendChild(slideshowWrapper);

  // Footer
  const footer = document.createElement('footer');
  footer.innerHTML = '<small>&copy; 2025 Galería Digital</small>';

  app.append(header, main, footer);

  // Load images synchronously (Webpack processes these at build time)
  const images = loadImageList();

  // Initialize slideshow
  if (images.length > 0) {
    initSlideshow(images);
    createSlideshow(slideshowWrapper);
  } else {
    slideshowWrapper.innerHTML = '<p>No se encontraron imágenes</p>';
  }
}