var Book = /** @class */ (function () {
    function Book(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Da them sach ".concat(book.title));
    };
    Library.prototype.removeBook = function (ISBN) {
        var isbn = this.books.length;
        this.books = this.books.filter(function (book) { return book.ISBN != ISBN; });
        if (this.books.length < isbn) {
            console.log("Da xoa ".concat(isbn));
        }
        else {
            console.log("Khong thi thay ".concat(isbn));
        }
    };
    Library.prototype.findBook = function (title) {
        var found = this.books.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
        if (found) {
            console.log("Tim thay sach: ".concat(found.title, " - ").concat(found.author));
        }
        else {
            console.log("Khong tim thay sach: ".concat(title));
        }
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("Hoc gi", "Son", "9780132350884");
var book2 = new Book("Hoc gi?", "Son?", "97802350884");
var book3 = new Book("Hoc gi--", "Son??", "90132350884");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.findBook("Hoc gi?");
library.removeBook("90132350884");
