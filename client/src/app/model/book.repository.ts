import {Injectable} from '@angular/core';
import { Book } from './book.model';
import { staticDataSource } from './static.datasource';
@Injectable ()
export class BookRepository
{
  private books: Book [] = [];
  private authors:string [] = [];
  constructor (private datasource: staticDataSource)
  {
    datasource.getBooks().subscribe(data =>{
      this.books = data;
      this.authors = data.map(p =>p.author!)
      .filter((a, index, array)=> array.indexOf(a) === index).sort();
    });
  }
  getBooks(author:string=""):Book []
    {
      return this.books
      .filter(b=>author == "" || author === b.author);

    }
    getBook(id:number):Book
    {
      return (this.books.find(b =>b._id === id)!);
    }
    getAuthors():string []
    {
      return this.authors;
    }
  }


