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

// Book Object
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

// Add Book to library
function addBook(book) {
  library.push(book);
};

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
let book2 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "336", true);
let book3 = new Book("The Lion, the Witch and the Wardrobe", "C. S. Lewis", "445", false);

addBook(book1);
addBook(book2);
addBook(book3);

function deleteBook(id) {
  
};

function render() {
  // Remove all previous renders so there are no accidental duplicates
  document.querySelectorAll(".book-div").forEach( book => book.remove() )

  let id = 0;
  library.forEach(book => {
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

    // Create read
    let readTag = document.createElement("p");
    let readText = document.createTextNode(`Read: ${book.read}`);

    readTag.className = "info-text";

    readTag.appendChild(readText);

    bookDiv.appendChild(readTag);

    // Create read or not read button
    let btnTxt = "";
    let readBtn = document.createElement("button");

    if (book.read === true) {
      btnTxt = "Read"
      readBtn.className = "read-btn";
    } else {
      btnTxt = "Not Read"
      readBtn.className = "not-read-btn";
    };

    let rBtnText = document.createTextNode(btnTxt);
  
    readBtn.appendChild(rBtnText);

    bookDiv.appendChild(readBtn);

    // Change Read state and render
    readBtn.onclick = function() {
      if (book.read === true) {
        book.read = false;
        render();
      } else {
        book.read = true;
        render();
      };
    };

    // Add Delete button
    Array.prototype.remove = function(value) {
      this.splice(this.indexOf(value), 1);
    };

    let deleteTag = document.createElement("button");
    let deleteText = document.createTextNode(`Remove`);

    deleteTag.className = "rm-book";

    deleteTag.onclick = function() {
      library.remove(book);
      render();
    };

    deleteTag.appendChild(deleteText);

    bookDiv.appendChild(deleteTag);

    // ID
    let idTag = document.createElement("p");
    let idText = document.createTextNode(`ID: ${id}`);

    idTag.className = "info-text";

    idTag.appendChild(idText);

    bookDiv.appendChild(idTag);
    
    id++;
  });
};

render();

submitBtn.addEventListener("click", function() {
  let title1 = document.getElementById("title-input").value;
  let author1 = document.getElementById("author-input").value;
  let pages1 = document.getElementById("pages-input").value;
  let read1 = document.getElementById("read-input").checked;

  if (title1 !== "" && author1 !== "" && pages1 !== "") {
    book = new Book(title1, author1, pages1, read1)
    addBook(book);
    render();
  } else {
    console.log("EMPTY");
    flashError();
  };
});
