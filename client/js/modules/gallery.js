function gallery() {

let slides = document.querySelectorAll('.slide'),
    slideTotal = slides.length - 1,
    slideCurrent = -1;

function initArrows() {
    const leftArrow = document.querySelector('.left-arrow'),
          rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', () => {
        slideLeft();
    })
    
    rightArrow.addEventListener('click', () => {
        slideRight();
    })
}

function slideInitial() {
    initArrows();
    setTimeout(function () {
        slideLeft();
    }, 500);
}

function slideRight() {
    if (slideCurrent < slideTotal) {
        slideCurrent++;
    } else {
        slideCurrent = 0;
    }

    if (slideCurrent > 0) {
        var preactiveSlide = slides[slideCurrent - 1];
    } else {
        var preactiveSlide = slides[slideTotal];
    }
    var activeSlide = slides[slideCurrent];
    if (slideCurrent < slideTotal) {
        var proactiveSlide = slides[slideCurrent + 1];
    } else {
        var proactiveSlide = slides[0];
    }

    slides.forEach((slide) => {
        if (slide.classList.contains('preactivede')) {
            slide.classList.remove('preactivede');
            slide.classList.remove('preactive');
            slide.classList.remove('active');
            slide.classList.remove('proactive');
            slide.classList.add('proactivede');
        }
        if (slide.classList.contains('preactive')) {
            slide.classList.remove('preactive');
            slide.classList.remove('active');
            slide.classList.remove('proactive');
            slide.classList.remove('proactivede');
            slide.classList.add('preactivede');
        }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

}

function slideLeft() {
    if (slideCurrent > 0) {
        slideCurrent--;
    } else {
        slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
        var proactiveSlide = slides[slideCurrent + 1];
    } else {
        var proactiveSlide = slides[0];
    }
    var activeSlide = slides[slideCurrent];
    if (slideCurrent > 0) {
        var preactiveSlide = slides[slideCurrent - 1];
    } else {
        var preactiveSlide = slides[slideTotal];
    }
    slides.forEach((slide) => {
        if (slide.classList.contains('proactive')) {
            slide.classList.remove('preactivede');
            slide.classList.remove('preactive');
            slide.classList.remove('active');
            slide.classList.remove('proactive');
            slide.classList.add('proactivede');
        }
        if (slide.classList.contains('proactivede')) {
            slide.classList.remove('preactive');
            slide.classList.remove('active');
            slide.classList.remove('proactive');
            slide.classList.remove('proactivede');
            slide.classList.add('preactivede');
        }
    });

        preactiveSlide.classList.remove('preactivede');
        preactiveSlide.classList.remove('active');
        preactiveSlide.classList.remove('proactive');
        preactiveSlide.classList.remove('proactivede');
        preactiveSlide.classList.add('preactive');

        activeSlide.classList.remove('preactivede');
        activeSlide.classList.remove('preactive');
        activeSlide.classList.remove('proactive');
        activeSlide.classList.remove('proactivede');
        activeSlide.classList.add('active');

        proactiveSlide.classList.remove('preactivede');
        proactiveSlide.classList.remove('preactive');
        proactiveSlide.classList.remove('active');
        proactiveSlide.classList.remove('proactivede');
        proactiveSlide.classList.add('proactive');

    }

    slideInitial();
}

export default gallery;