const myBooks = [];

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBook = document.getElementById('add-book');
const allBooks = document.getElementById('books');

function addNewBook() {
  while (allBooks.hasChildNodes()) {
    allBooks.removeChild(allBooks.firstChild);
  }

  for (let i = 0; i < myBooks.length; i += 1) {
    const bookHTMLTemplate = `
        <p>${myBooks[i].title}</p>
        <p>${myBooks[i].author}</p>
        <button type="button" name=${i}>Remove</button>
        <hr>`;
    const eachBooks = document.createElement('div');
    eachBooks.classList.add('item');
    eachBooks.innerHTML = bookHTMLTemplate;
    allBooks.appendChild(eachBooks);
  }
}

function 

addBook.addEventListener('click', () => {
  if (author.value && title.value) {
    const newBook = {
      author: '',
      title: '',
    };
    newBook.author = author.value;
    newBook.Title = title.value;
    myBooks.push(newBook);
    addNewBook();
  }
});

