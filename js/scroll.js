document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  const clientsHeight = document.documentElement.clientHeight;
  console.log(clientsHeight / 2);

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
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
