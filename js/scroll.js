// Scroll smooth
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  const clientsHeight = document.documentElement.clientHeight;
  console.log(clientsHeight / 2);

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      animation: 'fadeIn 0.5s ease-out',
    });
  }
});

// Scroll to Top
const toTop = document.querySelector('.top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

// Animations
// const projectPage = document.querySelector('.projects');
// window.addEventListener('scroll', function () {
//   let value = window.scrollY;
//   console.log(value);

//   if (value > 300) {
//     projectPage.style.animation = 'fadeIn 2s ease-out';
//   }
// });
