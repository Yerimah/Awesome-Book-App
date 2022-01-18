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

export default Book;
