const slides = document.querySelectorAll('.modal__container'),
  slide = document.querySelectorAll('.modal__list'),
  slideCount = slide.length,
  slideWidth = 800,
  slideMargin = 30,
  prevBtn = document.querySelector('.prev'),
  nextBtn = document.querySelector('.next');

let currentIndex = 0;

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');

    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');

    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitPos();
  setTimeout(() => {
    slides.classList.add('animated');
  }, 100);
}

function updateWidth() {
  const currentSlides = document.querySelectorAll('.modal__list');
  const newSlideCount = currentSlides.length;

  const newWidth =
    (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slides.style.width = newWidth;
}

function setInitPos() {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
}

nextBtn.addEventListener('click', function () {
  moveSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', function () {
  moveSlide(currentIndex - 1);
});

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIndex = num;
  //   console.log(currentIndex, slideCount);

  if (currentIndex == slideCount || currentIndex == -slideCount) {
    setTimeout(() => {
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIndex = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add('animated');
    }, 600);
  }
}

let timer = undefined;
function autoSlide() {
  if (timer == undefined) {
    timer = setInterval(() => {
      moveSlide(currentIndex + 1);
    }, 3000);
  }
}
autoSlide();
function stopSlide() {
  clearInterval(timer);
  timer = undefined;
  //   console.log(timer);
}
slides.addEventListener('mouseenter', function () {
  stopSlide();
});
slides.addEventListener('mouseleave', function () {
  autoSlide();
});
