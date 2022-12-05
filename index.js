import Books from './modules/books.js';
import { date, options } from './modules/date.js';

let newBooks = new Books();

const displayBooks = () => {
  const bklist = document.querySelector('.book-list');
  bklist.innerHTML = '';

  const booksArr = localStorage.getItem('bks') ? JSON.parse(localStorage.getItem('bks')) : [];
  let myBook = booksArr.head;
  while (myBook !== null) {
    const article = document.createElement('article');
    article.className = 'article';
    const titleP = document.createElement('p');
    titleP.className = 'title';
    titleP.textContent = myBook.title;
    article.appendChild(titleP);

    const authorP = document.createElement('p');
    authorP.className = 'author';
    authorP.textContent = myBook.author;
    article.appendChild(authorP);

    const rmvBtn = document.createElement('button');
    rmvBtn.className = 'remove-btn';
    rmvBtn.textContent = 'Remove';
    const rmvBtnDiv = document.createElement('div');
    rmvBtnDiv.className = 'rmv-div';
    rmvBtnDiv.appendChild(rmvBtn);
    article.appendChild(rmvBtnDiv);

    bklist.appendChild(article);
    bklist.classList.add('show-container');

    myBook = myBook.next;
  }
};

const addBtn = document.querySelector('.add-btn');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
addBtn.addEventListener('click', () => {
  if (title.value !== '' && author.value !== '') {
    newBooks.add(title.value, author.value);

    localStorage.setItem('bks', JSON.stringify(newBooks));
    title.value = '';
    author.value = '';
    displayBooks();
  }
});

const saveAddedBk = () => {
  const booksArr = JSON.parse(localStorage.getItem('bks'));

  if (booksArr !== null) {
    let bk = booksArr.head;

    if (bk === undefined) return;
    newBooks = new Books();
    while (bk !== null) {
      newBooks.add(bk.title, bk.author);
      bk = bk.next;
    }
  }
};

window.addEventListener('load', () => {
  displayBooks();
  saveAddedBk();
});

const removeBtn = document.querySelector('.book-list');

removeBtn.addEventListener('click', (event) => {
  const targetBk = event.target.closest('.article');
  if (targetBk !== null && targetBk !== undefined) {
    const nodelist = targetBk.childNodes;

    const [title, author] = nodelist;
    newBooks.remove(title.innerText, author.innerText);
    localStorage.removeItem('bks');

    localStorage.setItem('bks', JSON.stringify(newBooks));
    saveAddedBk();
    displayBooks();
  }
});

// date
const dateContainer = document.querySelector('.date');
const dateStr = date.toLocaleString('en-US', options);
dateContainer.innerHTML = dateStr;

// Change main area content on click
const listLink = document.querySelector('.list');
const addNewLink = document.querySelector('.add-new');
const contactLink = document.querySelector('.cntct');
const showBooks = document.querySelector('.display-books');
const h2 = document.querySelector('.h2');
const form = document.querySelector('.form');
const contactDiv = document.querySelector('.contact');

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  showBooks.classList.add('show');
  h2.classList.remove('show');
  form.classList.remove('show');
  contactDiv.classList.remove('show');
});

addNewLink.addEventListener('click', (e) => {
  e.preventDefault();
  showBooks.classList.remove('show');
  showBooks.classList.add('hide');
  h2.classList.add('show');
  form.classList.add('show');
  contactDiv.classList.remove('show');
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  showBooks.classList.add('hide');
  showBooks.classList.remove('show');
  h2.classList.remove('show');
  form.classList.remove('show');
  contactDiv.classList.add('show');
});
