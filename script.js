// Full page navigation menu starts
const menuNav = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.bars-menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('active');
  body.classList.toggle('overflow-disabled');
});

const navLink = document.getElementsByClassName('link');

let i = 0;

while (i < navLink.length) {
  navLink[i].addEventListener('click', () => {
    menuNav.classList.toggle('active');
    body.classList.toggle('overflow-disabled');
  });
  i += 1;
}

// Object start here
const works = [
  {
    item_title: 'Tonic',
    item_image: './img/work1.svg',
    item_history: {
      t_bold: 'Canopy',
      counter1: './img/Counter.svg',
      backend: 'Back End Dev',
      counter2: './img/Counter.svg',
      year: 2022,
    },
    item_description_text: 'A daily selection of privately personalized reads;no accounts or sign - ups required.',
    item_categories: {
      first_category: 'html',
      second_category: 'css',
      third_category: 'javascript',
    },
    project_see_button: 'See Project',
    close_modal_button: './img/closemodal.svg',
  },

  {
    item_title: 'Multi-Post Stories',
    item_image: './img/work2.svg',
    item_history: {
      t_bold: 'Canopy',
      counter1: './img/Counter.svg',
      backend: 'Back End Dev',
      counter2: './img/Counter.svg',
      year: 2022,
    },
    item_description_text: 'A daily selection of privately personalized reads;no accounts or sign - ups required.',
    item_categories: {
      first_category: 'html',
      second_category: 'css',
      third_category: 'javascript',
    },
    project_see_button: 'See Project',
    close_modal_button: './img/closemodal.svg',
  },

  {
    item_title: 'Tonic',
    item_image: '/img/work3.svg',
    item_history: {
      t_bold: 'Canopy',
      counter1: '/img/Counter.svg',
      backend: 'Back End Dev',
      counter2: './img/Counter.svg',
      year: 2022,
    },
    item_description_text: 'A daily selection of privately personalized reads;no accounts or sign - ups required.',
    item_categories: {
      first_category: 'html',
      second_category: 'css',
      third_category: 'javascript',
    },
    project_see_button: 'See Project',
    close_modal_button: './img/closemodal.svg',
  },

  {
    item_title: 'Multi-Post Stories',
    item_image: './img/work4.svg',
    item_history: {
      t_bold: 'Canopy',
      counter1: './img/Counter.svg',
      backend: 'Back End Dev',
      counter2: './img/Counter.svg',
      year: 2022,
    },
    item_description_text: 'A daily selection of privately personalized reads;no accounts or sign - ups required.',
    item_categories: {
      first_category: 'html',
      second_category: 'css',
      third_category: 'javascript',
    },
    project_see_button: 'See Project',
    close_modal_button: './img/closemodal.svg',
  },
];

const workSection = document.querySelector('#works');
for (let i = 0; i < works.length; i += 1) {
  // workitem
  const workItemDiv = document.createElement('div');
  workSection.appendChild(workItemDiv);
  workItemDiv.classList.add('work-item');

  const itemImage = document.createElement('div');
  itemImage.classList.add('item-img');
  workItemDiv.appendChild(itemImage);
  const img = document.createElement('img');
  img.classList.add('item-img-1');
  img.src = works[i].item_image;
  itemImage.appendChild(img);

  const itemBody = document.createElement('div');
  itemBody.classList.add('item-body');
  workItemDiv.appendChild(itemBody);

  const itemTitle = document.createElement('h3');
  itemTitle.classList.add('item-title');
  itemTitle.innerHTML = works[i].item_title;
  itemBody.appendChild(itemTitle);

  const itemHistory = document.createElement('div');
  itemHistory.classList.add('item-history');
  itemBody.appendChild(itemHistory);

  const tSpan = document.createElement('span');
  tSpan.classList.add('t-bold');
  tSpan.innerHTML = works[i].item_history.t_bold;
  itemHistory.appendChild(tSpan);

  const couImg1 = document.createElement('img');
  couImg1.classList.add('counter', 'counter1');
  couImg1.src = works[i].item_history.counter1;
  itemHistory.appendChild(couImg1);

  const backSpan = document.createElement('span');
  backSpan.classList.add('backend');
  backSpan.innerHTML = works[i].item_history.backend;
  itemHistory.appendChild(backSpan);

  const couImg2 = document.createElement('img');
  couImg2.classList.add('counter', 'counter2');
  couImg2.src = works[i].item_history.counter2;
  itemHistory.appendChild(couImg2);

  const yearSpan = document.createElement('span');
  yearSpan.classList.add('year');
  yearSpan.innerHTML = works[i].item_history.year;
  itemHistory.appendChild(yearSpan);

  const itemDesc = document.createElement('div');
  itemDesc.classList.add('item-desc');
  itemBody.appendChild(itemDesc);

  const itemDescPar = document.createElement('p');
  itemDescPar.classList.add('item-description-text');
  itemDescPar.innerHTML = works[i].item_description_text;
  itemDesc.appendChild(itemDescPar);

  const itemCategories = document.createElement('ul');
  itemCategories.classList.add('item-categories');
  itemBody.appendChild(itemCategories);

  const firstCateg = document.createElement('li');
  firstCateg.classList.add('item-category', 'first-category');
  firstCateg.innerHTML = works[i].item_categories.first_category;
  itemCategories.appendChild(firstCateg);

  const secondCateg = document.createElement('li');
  secondCateg.classList.add('item-category', 'second-category');
  secondCateg.innerHTML = works[i].item_categories.second_category;
  itemCategories.appendChild(secondCateg);

  const thirdCateg = document.createElement('li');
  thirdCateg.classList.add('item-category', 'third-category');
  thirdCateg.innerHTML = works[i].item_categories.third_category;
  itemCategories.appendChild(thirdCateg);

  const btn = document.createElement('button');
  itemBody.appendChild(btn);
  btn.classList.add('btn-primary', 'project-button');
  btn.textContent = works[i].project_see_button;

  // dialog
  const dialogPop = document.createElement('dialog');
  workSection.appendChild(dialogPop);
  dialogPop.classList.add('modal', 'modal-1');

  const modalTop = document.createElement('div');
  dialogPop.appendChild(modalTop);
  modalTop.classList.add('modal-top');

  const modalTitle = document.createElement('h3');
  modalTitle.classList.add('item-title');
  modalTitle.innerHTML = works[i].item_title;
  modalTop.appendChild(modalTitle);

  const modalHistory = document.createElement('div');
  modalHistory.classList.add('item-history');
  modalTop.appendChild(modalHistory);

  const mSpan = document.createElement('span');
  mSpan.classList.add('t-bold');
  mSpan.innerHTML = works[i].item_history.t_bold;
  modalHistory.appendChild(mSpan);

  const mCouImg1 = document.createElement('img');
  mCouImg1.classList.add('counter', 'counter1');
  mCouImg1.src = works[i].item_history.counter1;
  modalHistory.appendChild(mCouImg1);

  const backSpanM = document.createElement('span');
  backSpanM.classList.add('backend');
  backSpanM.innerHTML = works[i].item_history.backend;
  modalHistory.appendChild(backSpanM);

  const mCouImg2 = document.createElement('img');
  mCouImg2.classList.add('counter', 'counter2');
  mCouImg2.src = works[i].item_history.counter2;
  modalHistory.appendChild(mCouImg2);

  const yearSpanM = document.createElement('span');
  yearSpanM.classList.add('year');
  yearSpanM.innerHTML = works[i].item_history.year;
  modalHistory.appendChild(yearSpanM);

  const modalClose = document.createElement('img');
  modalClose.classList.add('close-modal');
  modalClose.src = works[i].close_modal_button;
  modalTop.appendChild(modalClose);

  const modalImage = document.createElement('div');
  dialogPop.appendChild(modalImage);
  modalImage.classList.add('modal-img');
  const modalimg = document.createElement('img');
  modalimg.classList.add('item-img-1');
  modalImage.appendChild(modalimg);
  modalimg.src = works[i].item_image;

  const modalBottom = document.createElement('div');
  dialogPop.appendChild(modalBottom);
  modalBottom.classList.add('modal-bottom');
  modalBottom.innerHTML = `<div class='item-details'>
            <p class='item-details-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
            </p>
          </div>
          <div class='bottom-left'>
            <ul class='item-categories'>
              <li class='item-category first-category'>html</li>
              <li class='item-category second-category'>css</li>
              <li class='item-category third-category'>javascript</li>
            </ul>
            <hr />
            <ul class='modal-buttons'>
              <li class='modal-b-1'>
                <a class='btn-primary modal-b-flex' href='https://ndayishimiyeeric.github.io/odalton-portfolio/'>
                  See live <img src='./img/liveicon.svg' alt='livedemo' />
                </a>
              </li>
              <li class='modal-b-2'>
                <a class='btn-primary modal-b-flex' href='https://github.com/ndayishimiyeeric/odalton-portfolio'>
                  See source <img src='./img/github22.svg' alt='github' />
                </a>
              </li>
            </ul>
          </div>`;
}

const childNodesNum = document.getElementsByClassName('work-item');
childNodesNum[0].classList.add('item-1');
childNodesNum[1].classList.add('item-2');
childNodesNum[2].classList.add('item-3');
childNodesNum[3].classList.add('item-4');

const childNodeModal = document.getElementsByClassName('modal');

const btnChild = document.getElementsByClassName('project-button');
btnChild[0].addEventListener('click', () => {
  childNodeModal[0].showModal();
});
btnChild[1].addEventListener('click', () => {
  childNodeModal[1].showModal();
});
btnChild[2].addEventListener('click', () => {
  childNodeModal[2].showModal();
});
btnChild[3].addEventListener('click', () => {
  childNodeModal[3].showModal();
});

const btnClose = document.getElementsByClassName('close-modal');
btnClose[0].addEventListener('click', () => {
  childNodeModal[0].close();
});
btnClose[1].addEventListener('click', () => {
  childNodeModal[1].close();
});
btnClose[2].addEventListener('click', () => {
  childNodeModal[2].close();
});
btnClose[3].addEventListener('click', () => {
  childNodeModal[3].close();
});

//form validation
const form = document.getElementById('contact-form');
const email = document.getElementById('mail');
const submitBtn = document.getElementById('submitBtn');


submitBtn.addEventListener('submit', () => {
  const regExp = /[a-z]/;
  if (regExp.test(email.value) === false) {
    showError();
    form.preventDefault();
  }
});



function showError(){
  const error = document.getElementsByClassName('error');
  error.style.display = 'block';
  error.textContent = "Please use small letters in your email"
}
