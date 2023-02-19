const textWrapper = document.querySelector('.loading__text');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: '.loading__text .letter',
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1200,
  delay: (el, i) => 2400 + 30 * i,
});

gsap.from('.loading__page--wrapper', 2, {
  scale: 0.8,
  ease: 'power1.inOut',
});

gsap.from('.loading__page', 2, {
  top: '100%',
  ease: 'power3.inOut',
});

gsap.to(
  '.loading__page--wrapper, .loading__pre',
  1,
  {
    scale: 1.5,
    opacity: 0,
    display: 'none',
    ease: 'power3.inOut',
    delay: 2,
  },
  '-=1'
);

gsap.from('.loading__reveal', 1, {
  width: '0',
  ease: 'power3.inOut',
  delay: 3,
});

gsap.to('.loading__reveal', 0.8, {
  left: '100%',
  ease: 'power3.inOut',
  delay: 4,
});

gsap.to('.loading__text--wrapper', 0.2, {
  opacity: 0,
  display: 'none',
  ease: 'power3.inOut',
  delay: 4,
});

gsap.from('.header__image', 1, {
  right: '20%',
  opacity: 0,
  ease: 'power3.inOut',
  delay: 5,
});
gsap.to('.header__image', 1, {
  right: '50%',
  opacity: 1,
  ease: 'power3.inOut',
  delay: 5,
});
gsap.to('.stagger__wrapper', 1.5, {
  x: 50,
  opacity: 1,
  ease: 'power3.inOut',
  delay: 6,
  stagger: {
    amount: 0.5,
  },
});

function loadingPage() {
  document.querySelector('body').style.overflow = 'hidden';
  setTimeout(() => {
    document.querySelector('body').style.overflow = 'scroll';
  }, 6000);
}

loadingPage();
