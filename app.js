let library = [];
let newBtn = document.getElementById("nb-btn");
let popUp = document.getElementById("pu-container");
let closePU = document.getElementById("close");

// Open pop up form
newBtn.addEventListener("click", function() {
  popUp.style.display = "block";
});

// Close pop up form
closePU.addEventListener("click", function() {
  popUp.style.display = "none";
});

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
  let id = 0;
  library.forEach(book => {
    id++;

    let container = document.getElementById("container");

    // Create Div for every book
    let bookDiv = document.createElement("div");
    bookDiv.className = "book-div";
    bookDiv.id = `book${id}`;

    container.appendChild(bookDiv);

    // Create title
    let titleTag = document.createElement("h2");
    let titleText = document.createTextNode(book.title);

    titleTag.appendChild(titleText);

    bookDiv.appendChild(titleTag);

    // Create author
    let authorTag = document.createElement("p");
    let authorText = document.createTextNode(book.author);

    authorTag.appendChild(authorText);

    bookDiv.appendChild(authorTag);

    // Create pages
    let pagesTag = document.createElement("p");
    let pagesText = document.createTextNode(`Pages: ${book.pages}`);

    pagesTag.appendChild(pagesText);

    bookDiv.appendChild(pagesTag);

    // Create pages
    let readTag = document.createElement("p");
    let readText = document.createTextNode(`Read: ${book.read}`);

    readTag.appendChild(readText);

    bookDiv.appendChild(readTag);

    // Create info
    let infoTag = document.createElement("p");
    let infoText = document.createTextNode(book.info());

    infoTag.appendChild(infoText);

    bookDiv.appendChild(infoTag);
  });
};

render();