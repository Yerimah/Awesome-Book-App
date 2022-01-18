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

// export function render() {
//     bookList.innerHTML = '';
//     newBook.storedBook.forEach((singleBook) => {
//       bookList.innerHTML += `
//             <ul id="${singleBook.id}">
//                 <li>${singleBook.title}</li>
//                 <li>${singleBook.author}</li>
//                 <button class="removebtn" id="delete">remove</button>
//             </ul>
//             <hr>
//             `;
//     });
//   }