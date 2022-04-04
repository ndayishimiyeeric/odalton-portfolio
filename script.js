const menuNav = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.bars-menu');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('active');
  document.body.classList.toggle('overflow-disabled');

});

const navLink = document.getElementsByClassName('link');

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', () => {
    menuNav.classList.toggle('active');
    document.body.classList.toggle('overflow-disabled');
  });
}