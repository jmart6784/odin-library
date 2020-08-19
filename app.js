let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let r;
    if (read === true) {
      r = "read already";
    } else {
      r = "not read yet";
    };
    return `${title} by ${author}, ${pages} pages, ${r}`;
  };
};

function addBook(book) {
  library.push(book);
};

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
let book2 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "336", true);
let book3 = new Book("The Lion, the Witch and the Wardrobe", "C. S. Lewis", "445", false);

addBook(book1);
addBook(book2);
addBook(book3);

function render() {
  library.forEach(book => {
    console.log(book);
    console.log(book.title);
    console.log(book.author);
    console.log(book.pages);
    console.log(book.read);
    console.log(book.info());
  });
};

render();