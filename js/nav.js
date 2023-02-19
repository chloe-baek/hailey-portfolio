const header = document.querySelector('.header'),
  nav = document.querySelector('.nav'),
  navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

const links = document.querySelectorAll('.nav__link'),
  sections = document.querySelectorAll('section');

function activeNav() {
  let length = sections.length;
  while (--length && window.scrollY + 200 < sections[length].offsetTop) {}

  links.forEach((e) => e.classList.remove('nav__active'));
  links[length].classList.add('nav__active');
  if (window.scrollY + 200 <= sections[length].offsetTop) {
    links.forEach((e) => e.classList.remove('nav__active'));
  }
}
activeNav();
window.addEventListener('scroll', activeNav);
