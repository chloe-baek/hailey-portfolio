document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const toTop = document.querySelector('.top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

const header = document.querySelector('.header'),
  nav = document.querySelector('.nav'),
  navHeight = nav.getBoundingClientRect().height;

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

const links = document.querySelectorAll('.nav__item'),
  section = document.querySelectorAll('section');

function activeNav() {
  let length = section.length;
  while (--length && window.scrollY + 97 < section[length].offsetTop) {}
  links.forEach((e) => e.classList.remove('nav__active'));
  links[length].classList.add('nav__active');
}
activeNav();
window.addEventListener('scroll', activeNav);
