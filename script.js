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



let work1 = {
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

let work2 = {
  item_title: "Multi-Post Stories",
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

let work3 = {
  item_title: "Tonic",
  item_image: "./img/work3.svg",
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

let work4 = {
  item_title: "Multi-Post Stories",
  item_image: "./img/work4.svg",
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

let item1 = document.querySelector('.item-1');
let item2 = document.querySelector('.item-2');
let item3 = document.querySelector('.item-3');
let item4 = document.querySelector('.item-4');

let itemArray = [item1, item2, item3, item4];

let works = [work1, work2, work3, work4];




for (let i = 0; i < itemArray.length; i++) {
  //selector part
  item_title = itemArray[i].querySelector('.item-title');
  item_image = itemArray[i].querySelector('.item-img-1');
  t_bold = itemArray[i].querySelector('.t-bold');
  counter1 = itemArray[i].querySelector('.counter1');
  backend = itemArray[i].querySelector('.backend');
  counter2 = itemArray[i].querySelector('.counter2');
  year = itemArray[i].querySelector('.year');
  item_description_text = itemArray[i].querySelector('.item-description-text');
  first_category = itemArray[i].querySelector('.first-category');
  second_category = itemArray[i].querySelector('.second-category');
  third_category = itemArray[i].querySelector('.third-category');
  project_see_button = itemArray[i].querySelector('.project-one-button');
  //object part
    item_title.innerHTML = works[i].item_title;
    item_image.src = works[i].item_image;
    t_bold.innerHTML = works[i].item_history.t_bold;
    counter1.src = works[i].item_history.counter1;
    backend.innerHTML = works[i].item_history.backend;
    counter2.src = works[i].item_history.counter2;
    year.innerHTML = works[i].item_history.year;
    item_description_text.innerHTML = works[i].item_description_text;
    first_category.innerHTML = works[i].item_categories.first_category;
    second_category.innerHTML = works[i].item_categories.second_category;
    third_category.innerHTML = works[i].item_categories.third_category;
    project_see_button.innerHTML = works[i].project_see_button;
  
}


