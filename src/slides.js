// Variable para el índice del slide
let slideIndex = 1;

// Función principal que muestra los slides
export function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  // Ocultar todos los slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remover la clase active de todos los dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Mostrar el slide actual
  if (slides.length > 0) {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}

// Función para navegación next/prev
export function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Función para navegación por dots
export function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Función para crear el slideshow
export function createSlideshow(container) {
  // Crear el slideshow container
  const slideshowContainer = document.createElement('div');
  slideshowContainer.className = 'slideshow-container';
  
  // Datos de los slides
  const slides = [
    { num: 1, total: 3, img: 'img1.jpg', caption: 'Caption Text' },
    { num: 2, total: 3, img: 'img2.jpg', caption: 'Caption Two' },
    { num: 3, total: 3, img: 'img3.jpg', caption: 'Caption Three' }
  ];
  
  // Crear slides
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
  
  // Añadir controles de navegación
  const prevButton = document.createElement('a');
  prevButton.className = 'prev';
  prevButton.innerHTML = '&#10094;';
  prevButton.onclick = () => plusSlides(-1);
  
  const nextButton = document.createElement('a');
  nextButton.className = 'next';
  nextButton.innerHTML = '&#10095;';
  nextButton.onclick = () => plusSlides(1);
  
  slideshowContainer.append(prevButton, nextButton);
  container.appendChild(slideshowContainer);
  
  // Añadir salto de línea
  container.appendChild(document.createElement('br'));
  
  // Crear dots
  const dotsContainer = document.createElement('div');
  dotsContainer.style.textAlign = 'center';
  
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.onclick = () => currentSlide(index + 1);
    dotsContainer.appendChild(dot);
  });
  
  container.appendChild(dotsContainer);
  
  // Inicializar el slideshow
  showSlides(slideIndex);
  
  return {
    showSlides,
    plusSlides,
    currentSlide
  };
}