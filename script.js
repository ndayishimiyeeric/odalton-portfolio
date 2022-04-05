// Full page navigation menu starts
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
// Full page navigation menu ends

let works = {
  item_title: "Tonic",
  item_image: "./img/work1.svg",
  item_history: {
    t_bold: "Canopy",
    counter1: "./img/Counter.svg",
    backend: "Back End Dev",
    counter2: "./img/Counter.svg",
    year: 2022
  },
  item_description_text: 'A daily selection of privately personalized reads;no accounts or sign - ups required.',
  item_categories: {
    first_category: "html",
    second_category: "css",
    third_category: "javascript"
  },
  project_see_button: "See Project",
}

let works2 = {
  item_title: "Tonic",
  item_image: "./img/work2.svg",
  item_history: {
    t_bold: "Canopy",
    counter1: "./img/Counter.svg",
    backend: "Back End Dev",
    counter2: "./img/Counter.svg",
    year: 2022
  },
  item_description_text: 'A daily selection of privately personalized reads;no accounts or sign - ups required.',
  item_categories: {
    first_category: "html",
    second_category: "css",
    third_category: "javascript"
  },
  project_see_button: "See Project",
}

let item_title = document.querySelector('.item-title');
let item_image = document.querySelector('.item-img-1');
let t_bold = document.querySelector('.t-bold');
let counter1 = document.querySelector('.counter1');
let backend = document.querySelector('.backend');
let counter2 = document.querySelector('.counter2');
let year = document.querySelector('.year');
let item_description_text = document.querySelector('.item-description-text');
let first_category = document.querySelector('.first-category');
let second_category = document.querySelector('.second-category');
let third_category = document.querySelector('.third-category');
let project_see_button = document.querySelector('.project-one-button');


item_title.innerHTML = works.item_title;
item_image.src = works.item_image;
t_bold.innerHTML = works.item_history.t_bold;
counter1.src = works.item_history.counter1;
backend.innerHTML = works.item_history.backend;
counter2.src = works.item_history.counter2;
year.innerHTML = works.item_history.year;
item_description_text.innerHTML = works.item_description_text;
first_category.innerHTML = works.item_categories.first_category;
second_category.innerHTML = works.item_categories.second_category;
third_category.innerHTML = works.item_categories.third_category;
project_see_button.innerHTML = works.project_see_button;

let myWorks = [works, works2];
let secondWork = document.querySelector(".item-2");
let firstWork = document.querySelector(".item-1");




