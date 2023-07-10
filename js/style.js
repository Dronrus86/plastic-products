let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;

const btnBack = document.querySelector('.button_slider_back');
const btnNext = document.querySelector('.button_slider_next');









const buttonBurgerActive=document.querySelector('.button_burger');
const burgerNav = document.querySelector('.show_menu');

buttonBurgerActive.addEventListener('click', () => {
    burgerNav.classList.toggle('show_menu');

});




let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const sliderContainer = document.querySelector(".slider");
let slideInterval;
const prevArrow = document.querySelector(".slider-arrow.prev");
const nextArrow = document.querySelector(".slider-arrow.next");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    let startIndex = slideIndex;
    //   var endIndex = (slideIndex + 4) % slides.length;

    for (let j = 0; j < 4; j++) {
        let index = (startIndex + j) % slides.length;
        slides[index].style.display = "flex";
        slides[index].style.order = j + 1;
    }
}

function goToNextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

function goToPrevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

function goToSlide(index) {
    slideIndex = index;
    showSlides();
}

prevArrow.addEventListener("click", goToPrevSlide);
nextArrow.addEventListener("click", goToNextSlide);

showSlides();