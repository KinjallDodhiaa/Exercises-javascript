class Library {
  shelves = [];
  constructor(libraryName) {
    this.libraryName = libraryName;
  }

  addShelf(shelf) {
    if (!shelf.assignLibrary(this)) {
      console.log(
        `The shelf ${shelf.shelfName} already belongs to library ${shelf.library.libraryName} and therefore cannot be assigned to ${this.libraryName}`
      );
      return;
    }
    this.shelves.push(shelf);
  }

  burnBooksPublishBefore(year) {
    for (var shelf of this.shelves) {
      shelf.burnBooksPublishBefore(year);
    }
  }

  getBooksOfAuthorLastName(authorLastName) {
    var returnValue = [];
    for (var shelf of this.shelves) {
      for (var book of shelf.books) {
        if (book.author.lastName === authorLastName) {
          returnValue.push(book);
        }
      }
    }
    return returnValue;
  }
}

class Shelf {
  books = [];
  library = null;
  constructor(shelfName) {
    this.shelfName = shelfName;
  }

  assignLibrary(library) {
    if (this.library !== null) {
      return false;
    }
    this.library = library;
    return true;
  }

  addBooks(book) {
    if (this.books.length > 5) {
      console.log(`We can store max 5 books in ${this.shelfName}`);
    }
    if (this.hasBook(book)) {
      console.log("The book is already present");
    }
    this.books.push(book);
  }

  displayBooksInShelf() {
    console.log(`Number of books in ${this.shelfName} is ${this.books.length}`);
    for (var b of this.books) {
      console.log(b);
    }
  }

  moveBooksToAnotherShelf(book, otherShelf) {
    if (!this.hasBook(book)) {
      console.log("Book does not exist in the shelf");
    }
    if (this.library !== otherShelf.library) {
      console.log("The two shelves belong to different library");
    }
    var indexToRemoveBook = this.books.indexOf(book);
    this.books.splice(indexToRemoveBook, 1);
    otherShelf.addBooks(book);
  }

  moveBooksToAnotherShelfIfMoreThnXPages(othershelf, pages) {
    var booksToMove = [];
    for (var book of this.books) {
      if (book.numberOfPages > pages) {
        booksToMove.push(book);
      }
    }
    for (var book of booksToMove) {
      this.moveBooksToAnotherShelf(book, othershelf);
    }
  }

  hasBook(book) {
    return this.books.indexOf(book) >= 0;
  }

  burnBooksPublishBefore(year) {
    for (var i = 0; i < this.books.length; i++) {
      var book = this.books[i];
      if (book.publishYear < year) {
        var index = this.books.indexOf(book);
        this.books.splice(index, 1);
        i--;
      }
    }
  }
}

class Book {
  constructor(title, author, numberOfPages, publishYear) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.publishYear = publishYear;
  }
}

class Author {
  constructor(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }
}

var book1 = new Book(
  "Title 1",
  new Author("Kinjal", "Dodhia", 21, "Hamburg"),
  200,
  2015
);
var book2 = new Book(
  "Title 2",
  new Author("Monal", "Gada", 25, "Duesseldorf"),
  150,
  2014
);
var book3 = new Book(
  "Title 3",
  new Author("Sejal", "Nagda", 26, "Münich"),
  100,
  2013
);
var book4 = new Book(
  "Title 4",
  new Author("Sejal", "Nagda", 26, "Münich"),
  50,
  2012
);
var shelf1 = new Shelf("Shelf-1");
var shelf2 = new Shelf("Shelf-2");
var shelf3 = new Shelf("Shelf-3");
var library1 = new Library("State Library");
var library2 = new Library("Private Library");
shelf1.addBooks(book1);
shelf1.addBooks(book2);
shelf1.addBooks(book3);
shelf1.addBooks(book4);
console.log(shelf1.displayBooksInShelf());
console.log("----------------------------------------");
library1.addShelf(shelf1);
library1.addShelf(shelf2);
//console.log("-----------------------------------------");
//library2.addShelf(shelf3);
//shelf1.moveBooksToAnotherShelf(book4,shelf3);
//console.log("-----------------------------------------");
//shelf1.moveBooksToAnotherShelf(book1,shelf2);
//console.log(shelf1.displayBooksInShelf());
//console.log(shelf2.displayBooksInShelf());
//console.log('---------------------------------------');
//console.log('burning book');
//library1.burnBooksPublishBefore(2013);
//console.log(shelf1.displayBooksInShelf());
//console.log(shelf2.displayBooksInShelf());
//console.log('---------------------------------------');
//console.log(library1.getBooksOfAuthorLastName('Dodhia'));
console.log("------------pages---------------");
shelf1.moveBooksToAnotherShelfIfMoreThnXPages(shelf2, 100);
console.log(shelf1.displayBooksInShelf());
console.log(shelf2.displayBooksInShelf());
