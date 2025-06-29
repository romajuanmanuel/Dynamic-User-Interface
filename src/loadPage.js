export default function loadPage() {
  const app = document.getElementById('app');

  const header = document.createElement('header');
  header.innerHTML = `<h1>Mi Página</h1>`;

  const main = document.createElement('main');
  main.innerHTML = `<p>Contenido principal</p>`;

  const footer = document.createElement('footer');
  footer.innerHTML = `<small>&copy; 2025 Mi Sitio</small>`;

  app.append(header, main, footer);
}
