import { createSlideshow } from './slides.js';

export default function loadPage() {
  const app = document.getElementById('app');

  // Crear header
  const header = document.createElement('header');
  header.innerHTML = '<h1>Mi Página</h1>';

  // Crear main
  const main = document.createElement('main');
  main.innerHTML = '<p>Contenido principal</p>';

  // Crear y añadir el slideshow al main
  createSlideshow(main);

  // Crear footer
  const footer = document.createElement('footer');
  footer.innerHTML = '<small>&copy; 2025 Mi Sitio</small>';

  // Ensamblar la página
  app.append(header, main, footer);
}