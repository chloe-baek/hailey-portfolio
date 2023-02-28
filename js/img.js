const modals = document.querySelectorAll('.modal'),
  overlay = document.querySelector('.overlay'),
  btnsClose = document.querySelectorAll('.btn--close-modal'),
  btnsOpen = document.querySelectorAll('.btn--show-modal');

for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener('click', () => {
    modals[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
    // console.log(btnsOpen[i]);
  });
}

for (let i = 0; i < btnsClose.length; i++) {
  btnsClose[i].addEventListener('click', () => {
    modals[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modals.forEach((c) => c.classList.add('hidden'));
    overlay.classList.add('hidden');
  }
});

const popup = document.querySelector('.popup');

document
  .querySelector('input[type="submit"]')
  .addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.remove('hidden');
  });
document
  .querySelector('.btn--close-popup')
  .addEventListener('click', function () {
    popup.classList.add('hidden');
    document.querySelector('form').reset();
  });
