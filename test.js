let arrBook = [
  {
    title: "Absalom",
    author: "WILLIAM FAULKNER"
  },
  {
    title: "TIME TO KILL",
    author: "JOHN GRISHAM"
  },
  {
    title: "THE HOUSE OF MIRTH",
    author: "EDITH WHARTON"
  },
  {
    title: "EAST OF EDEN",
    author: "JOHN STEINBECK"
  },
];

const ListBooks = document.getElementById('book-container');
// const btnAdd = document.getElementById('add');
const formAdd = document.getElementById('frmAdd');



// Display list of books 
function showBooks() {

  let listHtml = '';

  arrBook.forEach((objBook, index) => {
    listHtml += `<div>
    <p>Title: ${objBook.title}</p>
    <p>Author: ${objBook.author}</p>
    <button class = "btnRemove">Remove</button>
    <hr></div>`;
  });
  
  ListBooks.innerHTML = listHtml; 

  //  rermove book 
  const btnRemove = document.querySelectorAll('.btnRemove');

  btnRemove.forEach((btnRemoveClick, index) => {
  btnRemoveClick.addEventListener('click', () => {
    arrBook.splice(index,1);  
    showBooks();  
  });  
});
}

showBooks();
// add book function 

formAdd.addEventListener('submit', (e) => {

  e.preventDefault();
  const newBook = {
    title: formAdd.title.value,
    author: formAdd.author.value
  };
  arrBook.push(newBook);
  showBooks();
  formAdd.title.value = '';
  formAdd.author.value = '';
});




