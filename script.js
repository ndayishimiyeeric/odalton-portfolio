const menuNav = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.bars-menu');
const bodyNavigation = document.body;

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('active');
  bodyNavigation.classList.toggle('overflow-disabled');
});

const navLink = document.getElementsByClassName('link');

let i = 0;

while (i < navLink.length) {
  navLink[i].addEventListener('click', () => {
    menuNav.classList.toggle('active');
    bodyNavigation.classList.toggle('overflow-disabled');
  });
  i += 1;
}