const header = document.querySelector('.header'),
  nav = document.querySelector('.nav'),
  navHeight = nav.getBoundingClientRect().height,
  links = document.querySelectorAll('.nav__link'),
  sections = document.querySelectorAll('section');

// Sticky Nav
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Active Nav
function activeNav() {
  let length = sections.length;
  while (--length && window.scrollY + 200 < sections[length].offsetTop) {}

  links.forEach((e) => e.classList.remove('nav__active'));
  links[length].classList.add('nav__active');
  sections[length].style.animation = 'fadeIn 3s ease-out';

  if (window.scrollY + 200 <= sections[length].offsetTop) {
    links.forEach((e) => e.classList.remove('nav__active'));
  }
}
activeNav();
window.addEventListener('scroll', activeNav);
