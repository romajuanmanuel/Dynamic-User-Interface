export default function loadPage() {
  const app = document.getElementById('app');

  // Crear header
  const header = document.createElement('header');
  header.innerHTML = '<h1>Mi Página</h1>';

  // Crear main y su contenido
  const main = document.createElement('main');
  
  // Crear el slideshow container
  const slideshowContainer = document.createElement('div');
  slideshowContainer.className = 'slideshow-container';
  
  // Crear slides
  const slides = [
    { num: 1, total: 3, img: 'img1.jpg', caption: 'Caption Text' },
    { num: 2, total: 3, img: 'img2.jpg', caption: 'Caption Two' },
    { num: 3, total: 3, img: 'img3.jpg', caption: 'Caption Three' }
  ];
  
  // Añadir slides al contenedor
  slides.forEach(slide => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'mySlides fade';
    slideDiv.innerHTML = `
      <div class="numbertext">${slide.num} / ${slide.total}</div>
      <img src="${slide.img}" style="width:100%">
      <div class="text">${slide.caption}</div>
    `;
    slideshowContainer.appendChild(slideDiv);
  });
  
  // Añadir botones de navegación
  const prevButton = document.createElement('a');
  prevButton.className = 'prev';
  prevButton.innerHTML = '&#10094;';
  prevButton.setAttribute('onclick', 'plusSlides(-1)');
  
  const nextButton = document.createElement('a');
  nextButton.className = 'next';
  nextButton.innerHTML = '&#10095;';
  nextButton.setAttribute('onclick', 'plusSlides(1)');
  
  slideshowContainer.append(prevButton, nextButton);
  
  // Añadir slideshow al main
  main.appendChild(slideshowContainer);
  
  // Añadir salto de línea
  main.appendChild(document.createElement('br'));
  
  // Crear contenedor de dots
  const dotsContainer = document.createElement('div');
  dotsContainer.style.textAlign = 'center';
  
  // Crear dots
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.setAttribute('onclick', `currentSlide(${index + 1})`);
    dotsContainer.appendChild(dot);
  });
  
  // Añadir dots al main
  main.appendChild(dotsContainer);
  
  // Crear footer
  const footer = document.createElement('footer');
  footer.innerHTML = '<small>&copy; 2025 Mi Sitio</small>';
  
  // Ensamblar toda la página
  app.append(header, main, footer);
}