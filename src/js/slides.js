// slides.js
let slideIndex = 1;
let imageList = [];

export function initSlideshow(images) {
  imageList = images;
  return imageList.length;
}

export function createSlideshow(container) {
  const slideshowContainer = document.createElement('div');
  slideshowContainer.className = 'slideshow-container';

  // Create slides
  imageList.forEach((imgModule, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'mySlides fade';
    slideDiv.innerHTML = `
      <div class="numbertext">${index + 1} / ${imageList.length}</div>
      <img src="${imgModule}" loading="lazy" style="width:100%">
      <div class="text">Imagen ${index + 1}</div>
    `;
    slideshowContainer.appendChild(slideDiv);
  });

  // Rest of your slideshow controls...
  // Controles de navegación
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

  // Dots indicadores
  const dotsContainer = document.createElement('div');
  dotsContainer.style.textAlign = 'center';

  imageList.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.onclick = () => currentSlide(index + 1);
    dotsContainer.appendChild(dot);
  });

  container.appendChild(dotsContainer);
  showSlides(slideIndex);
}

// Rest of your slide functions remain the same...
function showSlides(n) {
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  Array.from(slides).forEach(slide => {
    slide.style.display = 'none';
  });

  Array.from(dots).forEach(dot => {
    dot.className = dot.className.replace(' active', '');
  });

  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}