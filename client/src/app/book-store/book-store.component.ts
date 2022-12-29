import { Component} from '@angular/core';
import {Book} from '../model/book.model';
import {BookRepository} from '../model/book.repository';
import { Cart } from '../model/cart.model';


@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent  {
  public selectedAuthor = "";
  public selectedPage = 1;
  public booksPerPage = 4;

  constructor(private repository:BookRepository,
              private cart:Cart) { }


  get books():Book []
{
  const pageIndex = (this.selectedPage - 1) * this.booksPerPage;
  return this.repository.getBooks(this.selectedAuthor)
  .slice(pageIndex,pageIndex + this.booksPerPage);
}
get authors():string[]
{
  return this.repository.getAuthors();
}
changeAuthor(newAuthor:string=""):void
{
  this.selectedAuthor = newAuthor;
}


//function slice(pageIndex: number, arg1: number) {
  //throw new Error('Function not implemented.');
  changePage(newPage: number) : void
  {
    this.selectedPage = newPage;

  }
  changePagesize(newSize: number): void
  {
    this.booksPerPage = Number(newSize);
    this.changePage(1);

  }
  get pageCount(): number
  {
    return Math.ceil(this.repository.getBooks(this.selectedAuthor).length/this.booksPerPage);
  }
  /*get pageNumbers():number[]
  {
   return Array(Math.ceil(this.repository.getBooks(this.selectedAuthor).length/this.booksPerPage))
   .fill(0).map((x,i)=> i+1);
  }*/
  addBookToCart(book:Book): void
  {
    this.cart.addLine(book);
  }
}
  /*
  get pageNumbers():number []
  {
    return Array(Math.ceil(this.repository.getBooks(this.selectedAuthor).length/this.booksPerPage));
    .fill(0).map((x,i)=> i +1);
  }*/







