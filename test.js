const ListBooks = document.getElementById('book-container');
const formAdd = document.getElementById('formAdd');

function getBooks() {
  const arrBook = JSON.parse(localStorage.getItem('arrBook')) || [];
  return arrBook;
}

function saveBooks(arrBook) {
  localStorage.setItem('arrBook', JSON.stringify(arrBook));
}

// Display list of books
function showBooks() {
  let listHtml = '';
  const arrBook = getBooks();
  arrBook.forEach((objBook) => {
    listHtml += `<div>
    <p>Title: ${objBook.title}</p>
    <p>Author: ${objBook.author}</p>
    <button class = "btnRemove">Remove</button>
    <hr></div>`;
  });

  ListBooks.innerHTML = listHtml;
  //  remove book
  const btnRemove = document.querySelectorAll('.btnRemove');
  btnRemove.forEach((btnRemoveClick, index) => {
    btnRemoveClick.addEventListener('click', () => {
      arrBook.splice(index, 1);
      saveBooks(arrBook); // save to LocalStorage
      showBooks();
    });
  });
}

showBooks();
// add book function
formAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  const arrBook = getBooks();
  const newBook = {
    title: formAdd.title.value,
    author: formAdd.author.value,
  };
  arrBook.push(newBook);
  saveBooks(arrBook); // save to LocalStorage
  showBooks();
  formAdd.title.value = '';
  formAdd.author.value = '';
});
