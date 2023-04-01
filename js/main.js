// FOOTER DATE

const currentYear = new Date().getFullYear();
const currentYearSpan = document.getElementById('currentYear');
currentYearSpan.innerHTML = currentYear;

// mobile navbar

const menuButton = document.querySelector('.mobile__nav i.uil-bars');
const closeButton = document.querySelector('.mobile__nav i.uil-times');
const mainView = document.querySelector('.mobile__nav .navMobile__mainView');

menuButton.addEventListener('click', function () {
  mainView.classList.add('show');
});

closeButton.addEventListener('click', function () {
  mainView.classList.remove('show');
});
