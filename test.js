class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  class BookList {
    constructor(bookListElement, addBookFormElement, titleInputElement, authorInputElement) {
      this.bookListElement = bookListElement;
      this.addBookFormElement = addBookFormElement;
      this.titleInputElement = titleInputElement;
      this.authorInputElement = authorInputElement;
      this.books = [];
      this.loadBooks();
      this.updateBookList();
      this.addBookFormElement.addEventListener("submit", this.add.bind(this));
    }
  
    loadBooks() {
      const storedBooks = JSON.parse(localStorage.getItem("books"));
      if (storedBooks) {
        this.books = storedBooks.map(book => new Book(book.title, book.author));
      }
    }
  }
  
  const bookListElement = document.getElementById("book-list");
  const addBookFormElement = document.getElementById("add-book-form");
  const titleInputElement = document.getElementById("title-input");
  const authorInputElement = document.getElementById("author-input");
  
  const bookList = new BookList(bookListElement, addBookFormElement, titleInputElement, authorInputElement);