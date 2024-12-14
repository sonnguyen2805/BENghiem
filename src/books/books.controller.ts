import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book';
// import { log } from 'console';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post('create')
  createBook(@Body() body: CreateBookDto) {
    console.log(body);
    return this.booksService.createBook(body);
  }

  @Get('display')
  displayBook() {
    return this.booksService.getBook();
  }
  @Get(':id')
  async displayBookId(@Param('id', ParseIntPipe) id: number) {
    console.log('Received id:', id);
    const book = await this.booksService.getBookId(id);
    console.log('Book found:', book);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  @Put('update/:id')
  async updateBookId(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      title: string;
      author: string;
      description: string;
      publishedYear: number;
    },
  ) {
    const update = await this.booksService.updateBook(id, body);
    return update;
  }

  @Delete('deleted/:id')
  async deleteBook(
    @Param('id')  id:number
  ){
    const  deletedBook = await this.booksService.deleteBook(id);
    console.log(`Deleted book ${id} successfully`);
  }
}
