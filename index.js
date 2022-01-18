import {Book} from "./modules/functions.js";

  const bookTitle = document.querySelector('#booktitle');
  const bookAuthor = document.querySelector('#bookauthor');
  const bookList = document.querySelector('.booklist');
  const addBtn = document.querySelector('#addbtn');
  const form = document.querySelector('form');
  const newBook = new Book();

  function render() {
    bookList.innerHTML = '';
    newBook.storedBook.forEach((singleBook) => {
      bookList.innerHTML += `
            <ul id="${singleBook.id}">
                <li>${singleBook.title}</li>
                <li>${singleBook.author}</li>
                <button class="removebtn" id="delete">remove</button>
            </ul>
            <hr>
            `;
    });
  }

  bookList.addEventListener('click', (event) => {
    if (event.target.id === 'delete') {
      const element = event.target.parentNode;
      newBook.removeBook(element.id);
      render();
    }
  });
  
  addBtn.addEventListener('click', (e) => {
    // prevents a page reload
    e.preventDefault();
    // creates an object with the book values gotten from the inputs
    const ola = {
      title: bookTitle.value,
      author: bookAuthor.value,
      id: Date.now().toString(36),
    };
      // stores them in a temp array
    newBook.storedBook.push(ola);
    render();
  
    form.reset();
  });
  
  window.onload = () => render();
 
const headerList = document.getElementById('headlist');
const headerAdd = document.getElementById('headadd');
const headerContact = document.getElementById('headcontact');
const sectionList = document.getElementById('liststack');
const sectionAdd = document.getElementById('addbook-section');
const sectionInfo = document.getElementById('contact');

headerList.addEventListener('click', () => {
    headerList.classList.add('active');
    sectionList.classList.remove('hide-content');
    sectionAdd.classList.add('hide-content');
    sectionInfo.classList.add('hide-content');
});

headerList.addEventListener('click', () => {
    headerList.classList.add('active');
    headerAdd.classList.remove('active');
    headerContact.classList.remove('active');

    sectionList.classList.remove('hide-content');
    sectionAdd.classList.add('hide-content');
    sectionInfo.classList.add('hide-content');
});

headerAdd.addEventListener('click', () => {
    headerList.classList.remove('active');
    headerAdd.classList.add('active');
    headerContact.classList.remove('active');

    sectionList.classList.add('hide-content');
    sectionAdd.classList.remove('hide-content');
    sectionInfo.classList.add('hide-content');
});

headerContact.addEventListener('click', () => {
    headerList.classList.remove('active');
    headerAdd.classList.remove('active');
    headerContact.classList.add('active');

    sectionList.classList.add('hide-content');
    sectionAdd.classList.add('hide-content');
    sectionInfo.classList.remove('hide-content');
});