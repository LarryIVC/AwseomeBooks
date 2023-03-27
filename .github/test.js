let arrBook = [];

function Book(author, title) {
  
  this.author = author;
  this.title = title;
};



const btnAdd = document.getElementById(add);
  btnAdd.addEventListener('click',() => {
    Book.AddBook();
  })

Book.AddBook() {  

  
}



// const biblioteca = {
//   libros: [],
  
//   agregarLibro: function(titulo, autor) {
//     const libro = {titulo, autor};
//     this.libros.push(libro);
//     console.log(`${titulo} de ${autor} fue agregado a la biblioteca.`);
//   },
  
//   eliminarLibro: function(titulo) {
//     this.libros = this.libros.filter((libro) => libro.titulo !== titulo);
//     console.log(`${titulo} fue eliminado de la biblioteca.`);
//   }
// };

// biblioteca.agregarLibro('Cien años de soledad', 'Gabriel García Márquez');
// biblioteca.agregarLibro('1984', 'George Orwell');
// biblioteca.agregarLibro('La ciudad y los perros', 'Mario Vargas Llosa');

// console.log(biblioteca.libros);

// biblioteca.eliminarLibro('1984');

// console.log(biblioteca.libros);
