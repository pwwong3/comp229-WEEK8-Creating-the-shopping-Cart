import {Injectable} from '@angular/core';
import {Book} from './book.model';
import {Observable, from} from 'rxjs';

@ Injectable()
export class staticDataSource
{
  private books:Book[] =
  [
  new Book(1, 'Book 1', 'Author 1', 'Year 1','Short Description 1', 10),
  new Book(1, 'Book 1', 'Author 1', 'Year 1','Short Description 1', 10),
  new Book(1, 'Book 1', 'Author 1', 'Year 1','Short Description 1', 10),
  new Book(1, 'Book 1', 'Author 1', 'Year 1','Short Description 1', 10),
  new Book(2, 'Book 2', 'Author 2', 'Year 2','Short Description 2', 10),
  new Book(2, 'Book 2', 'Author 2', 'Year 2','Short Description 2', 10),
  new Book(2, 'Book 2', 'Author 2', 'Year 2','Short Description 2', 10),
  new Book(2, 'Book 2', 'Author 2', 'Year 2','Short Description 2', 10),
  new Book(3, 'Book 3', 'Author 3', 'Year 3','Short Description 3', 10),
  new Book(3, 'Book 3', 'Author 3', 'Year 3','Short Description 3', 10),
  new Book(3, 'Book 3', 'Author 3', 'Year 3','Short Description 3', 10),
  new Book(4, 'Book 4', 'Author 4', 'Year 4','Short Description 4', 10),
  new Book(4, 'Book 4', 'Author 4', 'Year 4','Short Description 4', 10),
  new Book(4, 'Book 4', 'Author 4', 'Year 4','Short Description 4', 10),
  new Book(4, 'Book 4', 'Author 4', 'Year 4','Short Description 4', 10),

  ];
  getBooks(): Observable<Book[]>
  {
    return from ([this.books]);
  }
}


