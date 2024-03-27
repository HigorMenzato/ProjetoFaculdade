
// Inicialize o carrossel
var myCarousel = document.querySelector('#carousel');
var carousel = new bootstrap.Carousel(myCarousel);

// Adicione os eventos de clique aos botões de controle do carrossel
var prevButton = document.querySelector('.carousel-control-prev');
var nextButton = document.querySelector('.carousel-control-next');

prevButton.addEventListener('click', function() {
    carousel.prev();
});

nextButton.addEventListener('click', function() {
    carousel.next();
});
