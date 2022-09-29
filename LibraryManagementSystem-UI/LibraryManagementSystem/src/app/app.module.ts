import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActionComponent } from './action/action.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './innerComponents/add-book/add-book.component';
import { ViewBooksComponent } from './innerComponents/view-books/view-books.component';
import { OutOfStockComponent } from './innerComponents/out-of-stock/out-of-stock.component';
import { BooksIssuedComponent } from './innerComponents/books-issued/books-issued.component';
import { BooksReturnedComponent } from './innerComponents/books-returned/books-returned.component';
import { AvailableBooksComponent } from './innerComponents/available-books/available-books.component';
import { AddDepartmentComponent } from './innerComponents/add-department/add-department.component';
import { AvailableDepartmentsComponent } from './innerComponents/available-departments/available-departments.component';
import { AddDesignationComponent } from './innerComponents/add-designation/add-designation.component';
import { AvailableDesignationsComponent } from './innerComponents/available-designations/available-designations.component';
import { AddStaffComponent } from './innerComponents/add-staff/add-staff.component';


const appRoutes:Routes = [
 // {path:'',component:AppComponent}, //localhost:4200
  {path:'book/add',component:AddBookComponent},
  {path:'department/add',component:AddDepartmentComponent},
  {path:'designation/add',component:AddDesignationComponent},
  {path:'books',component:AvailableBooksComponent},
  {path:'departments',component:AvailableDepartmentsComponent},
  {path:'designations',component:AvailableDesignationsComponent},
  {path:'book/return',component:BooksIssuedComponent},
  // {path:'booksreturned',component:BooksReturnedComponent},
  // {path:'outofstock',component:OutOfStockComponent},
  // {path:'viewbooks',component:ViewBooksComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ActionComponent,
    AddBookComponent,
    ViewBooksComponent,
    OutOfStockComponent,
    BooksIssuedComponent,
    BooksReturnedComponent,
    AvailableBooksComponent,
    AddDepartmentComponent,
    AvailableDepartmentsComponent,
    AddDesignationComponent,
    AvailableDesignationsComponent,
    AddStaffComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
