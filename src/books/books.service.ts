import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book';

export interface Books {
  id: number;
  title: string;
  author: string;
  description: string;
  publishedYear: number;
  createdAt: Date;
  updateAt: Date;
}

@Injectable()
export class BooksService {
  private books: Books[] = [
    {
      id: 1,
      title: 'Doraemon',
      author: 'Son',
      description: 'hay',
      publishedYear: 2014,
      createdAt: new Date(),
      updateAt: new Date(),
    },
  ];
  createBook(body: CreateBookDto) {
    console.log(`Body: ${body}`);

    const newBook: Books = {
      id: Date.now(),
      ...body,
      createdAt: new Date(),
      updateAt: new Date(),
    };
    this.books.push(newBook);
    return newBook;
  }

  getBook() {
    return this.books;
  }

  getBookId(id: number) {
    return this.books.find((book) => book.id === id);
  }

  updateBook(
    id: number,
    body: {
      title: string;
      author: string;
      description: string;
      publishedYear: number;
    },
  ) {


    const book = this.books.find((book) => book.id === id);

    if (!book) {
      return null;
    }

    book.title = body.title || book.title;
    book.author = body.author || book.author;
    book.description = body.description || book.description;
    book.publishedYear = body.publishedYear ||  book.publishedYear;
    book.updateAt = new Date(); 
    return book;
  }

  deleteBook(id: number){
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if(!bookIndex)
        return  null;
    this.books.splice(bookIndex,  1);
    return true;
  }
}
