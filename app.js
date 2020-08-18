function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let r;
    if (read === true) {
      r = "read already"
    } else {
      r = "not read yet"
    };
    return `${title} by ${author}, ${pages} pages, ${r}`;
  };
};

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);

console.log(hobbit.title);
console.log(hobbit.author);
console.log(hobbit.pages);
console.log(hobbit.read);
console.log(hobbit.info());