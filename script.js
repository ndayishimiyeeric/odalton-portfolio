const menuNav = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.bars-menu');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('active');
  document.body.classList.toggle('overflow-disabled');

});

const navLink = document.getElementsByClassName('link');

let i = 0;

while (i < navLink.length) {
  navLink[i].addEventListener('click', () => {
    menuNav.classList.toggle('active');
    document.body.classList.toggle('overflow-disabled');
  });
  i = i + 1;
}