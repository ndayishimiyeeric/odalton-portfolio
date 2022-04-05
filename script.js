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

let item_title = document.getElementsByClassName('item-title');
let item_image = document.getElementsByClassName('item-img-1');
let t_bold = document.getElementsByClassName('t-bold');
let counter1 = document.getElementsByClassName('counter1');
let backend = document.getElementsByClassName('backend');
let counter2 = document.getElementsByClassName('counter2');
let year = document.getElementsByClassName('year');
let item_description_text = document.getElementsByClassName('item-description-text');
let first_category = document.getElementsByClassName('first-category');
let second_category = document.getElementsByClassName('second-category');
let third_category = document.getElementsByClassName('third-category');
let project_see_button = document.getElementsByClassName('project-one-button');


function worksAssignment(workItem) {
  // item_title.innerHTML = workItem.item_title;
  for (let i = 0; i < item_title.length; i++){
    item_title[i].innerHTML = workItem.item_title[i];
  }
    item_image.src = workItem.item_image;
    t_bold.innerHTML = workItem.item_history.t_bold;
    counter1.src = workItem.item_history.counter1;
    backend.innerHTML = workItem.item_history.backend;
    counter2.src = workItem.item_history.counter2;
    year.innerHTML = workItem.item_history.year;
    item_description_text.innerHTML = workItem.item_description_text;
    first_category.innerHTML = workItem.item_categories.first_category;
    second_category.innerHTML = workItem.item_categories.second_category;
    third_category.innerHTML = workItem.item_categories.third_category;
    project_see_button.innerHTML = workItem.project_see_button;
}

worksAssignment(work1)
worksAssignment(work2)

// let myWorks = [works, works2];
// let secondWork = document.querySelector(".item-2");
// let firstWork = document.querySelector(".item-1");




