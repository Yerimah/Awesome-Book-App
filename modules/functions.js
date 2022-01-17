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