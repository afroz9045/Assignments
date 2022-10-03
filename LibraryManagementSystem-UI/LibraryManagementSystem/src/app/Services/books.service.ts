import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { IBooks } from "../Models/IBooks";
@Injectable({
   providedIn:'root'
})
export class BooksService{
    bookList: IBooks[]=[];
  constructor(private http:HttpClient){}

  baseUrl = 'https://localhost:7257/v1/Books/';
getAllBooks() {
    // debugger;
    this.bookList = [];    
  return this.http.get(this.baseUrl)
}
}