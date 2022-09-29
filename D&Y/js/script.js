const slides = document.querySelectorAll('.main'),
    slidesWrapper = document.querySelector('.slider__wrapper'),
    slidesField = document.querySelector('.content__slider'),
    next = document.querySelector('.arrow__right'),
    prev = document.querySelector('.arrow__left'),
    width = window.getComputedStyle(slidesWrapper).width,
    firstCircle = document.querySelectorAll('.first__circle'),
    secondCircle = document.querySelectorAll('.second__circle'),
    thirdCircle = document.querySelectorAll('.third__circle');

/*--------------Переход через arrow---------------------*/

let offset = 0;

slidesField.style.width = 100 * slides.length + '%';

slides.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)){
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener('click', () => {
    if (offset == 0){
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});

/*--------------Переход через dots---------------------*/

firstCircle.forEach(dot => {
    dot.addEventListener('click', () => {
        offset = 0;
        slidesField.style.transform = `translateX(-${offset}px)`
    });
});
secondCircle.forEach(dot => {
    dot.addEventListener('click', () => {
        offset = +width.slice(0, width.length - 2);
        slidesField.style.transform = `translateX(-${offset}px)`
    });
});
thirdCircle.forEach(dot => {
    dot.addEventListener('click', () => {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        slidesField.style.transform = `translateX(-${offset}px)`
    });
});