let myBooks = [
  {
    author: 'Larry Villegas',
    Title: 'The magician',
  },
];

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBook = document.getElementById('add-book');
const allBooks = document.querySelector('.books');
let newBook = {};


function getAllBooks(){
  for (let i = 0; i < myBooks.length; i += 1) {
    const bookHTMLTemplate = `
        <p>${myBooks[i].Title}</p>
        <p>${myBooks[i].author}</p>`;
     
    while (allBooks.hasChildNodes()){
      allBooks.removeChild(allBooks.firstChild);
    };

    const eachBooks = document.createElement('div');
    eachBooks.innerHTML = bookHTMLTemplate;
    allBooks.appendChild(eachBooks);
  };
}

addBook.addEventListener('click', () => {
  newBook.author = author.value;
  newBook.Title = title.value;
  myBooks.push(newBook);
  getAllBooks()
});








