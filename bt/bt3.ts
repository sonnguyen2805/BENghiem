class Book {
    title: string;
    author: string;
    ISBN: string;
    constructor(title: string, author: string, ISBN: string) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}

class Library{
    private books: Book[];
    constructor(){
        this.books = [];
    }
    addBook(book: Book): void{
        this.books.push(book);
        console.log(`Da them sach ${book.title}`);
    }
    removeBook(ISBN: string): void{
        const isbn = this.books.length;
        this.books = this.books.filter(book => book.ISBN != ISBN);
        if (this.books.length < isbn) {
            console.log(`Da xoa ${isbn}`);
        }else{
            console.log(`Khong thi thay ${isbn}`);
        }
    }


    findBook(title: string): void{
        const found = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
        if(found){
            console.log(`Tim thay sach: ${found.title} - ${found.author}`);
        }else{
            console.log(`Khong tim thay sach: ${title}`);
        }
    }
}

const library = new Library();

const book1 = new Book("Hoc gi", "Son", "9780132350884");
const book2 = new Book("Hoc gi?", "Son?", "97802350884");
const book3 = new Book("Hoc gi--", "Son??", "90132350884");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.findBook("Hoc gi?");

library.removeBook("90132350884");
