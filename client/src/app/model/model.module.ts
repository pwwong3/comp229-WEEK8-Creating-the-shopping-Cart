import {NgModule} from '@angular/core';
import {BookRepository} from './book.repository';
import { Cart } from './cart.model';
import {staticDataSource} from './static.datasource';
import {restdatasource} from './rest.datasource';
import {HttpClientModule}from '@angular/common/http';
@NgModule ({
  imports:[HttpClientModule],
providers: [BookRepository,staticDataSource,Cart,
{provide:staticDataSource, useClass:restdatasource}]
})
export class ModelModule{}

//we have just set up one model and we can pass data into the bookstore.
