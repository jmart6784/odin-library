let library = [];
let newBtn = document.getElementById("nb-btn");
let popUp = document.getElementById("pu-container");
let closePU = document.getElementById("close");
let submitBtn = document.getElementById("pu-btn");
let errorMsg = document.getElementById("error");

// Open pop up form
newBtn.addEventListener("click", function() {
  popUp.style.display = "block";
});

// Close pop up form
closePU.addEventListener("click", function() {
  popUp.style.display = "none";
});

// Flash error msg
function flashError() {
  errorMsg.style.display = "block";

  setTimeout(function() {
    errorMsg.style.display = "none";
  }, 3000);
};

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

    titleTag.className = "book-title";

    titleTag.appendChild(titleText);

    bookDiv.appendChild(titleTag);

    // Create author
    let authorTag = document.createElement("p");
    let authorText = document.createTextNode(`By ${book.author}`);

    authorTag.className = "info-text";

    authorTag.appendChild(authorText);

    bookDiv.appendChild(authorTag);

    // Create pages
    let pagesTag = document.createElement("p");
    let pagesText = document.createTextNode(`${book.pages} pages long`);

    pagesTag.className = "info-text";

    pagesTag.appendChild(pagesText);

    bookDiv.appendChild(pagesTag);

    // Create pages
    let readTag = document.createElement("p");
    let readText = document.createTextNode(`Read: ${book.read}`);

    readTag.className = "info-text";

    readTag.appendChild(readText);

    bookDiv.appendChild(readTag);
  });
};

render();

submitBtn.addEventListener("click", function() {
  let title = document.getElementById("title-input").value;
  let author = document.getElementById("author-input").value;
  let pages = document.getElementById("pages-input").value;

  if (title !== "" && author !== "" && pages !== "") {
    console.log(`TITLE: ${title}`);
    console.log(`AUTHOR: ${author}`);
    console.log(`PAGES: ${pages}`);
  } else {
    console.log("EMPTY");
    flashError();
  };
});