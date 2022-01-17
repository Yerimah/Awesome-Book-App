class Book {
    constructor() {
      this.storedBook = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
    }
  
    addBook(book) {
      this.storedBook.push(book);
  
      localStorage.setItem('books', JSON.stringify(this.storedBook));
    }
  
    removeBook(id) {
      this.storedBook = this.storedBook.filter((book) => book.id !== id);
  
      localStorage.setItem('books', JSON.stringify(this.storedBook));
    }
  }
  
  const bookTitle = document.querySelector('#booktitle');
  const bookAuthor = document.querySelector('#bookauthor');
  const bookList = document.querySelector('.booklist');
  const addBtn = document.querySelector('#addbtn');
  const form = document.querySelector('form');
  const newBook = new Book();