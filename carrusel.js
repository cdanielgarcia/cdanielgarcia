let currentSlides = [0, 0, 0]; // Índices de la diapositiva actual para cada carrusel

function moveSlide(index, step) {
    const carousels = document.querySelectorAll('.carousel');
    const slides = carousels[index].querySelectorAll('img');
    const totalSlides = slides.length;

    // Actualizar el índice de la diapositiva actual para el carrusel correspondiente
    currentSlides[index] = (currentSlides[index] + step + totalSlides) % totalSlides;

    // Mover al slide correspondiente
    const offset = -currentSlides[index] * 100;  // 100% del ancho por cada diapositiva
    carousels[index].style.transform = `translateX(${offset}%)`;
}
