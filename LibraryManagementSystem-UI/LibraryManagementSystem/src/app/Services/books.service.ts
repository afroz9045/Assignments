import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { IBooks } from "../Models/IBooks";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookList: IBooks[] = [];
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  getBooksSubUrl = environment.getBooksSubUrl;
  getOutOfStockBooksSubUrl = environment.getOutOfStockBooksSubUrl;
  getAllBooks(): Observable<IBooks[]> {
    // debugger;
    this.bookList = [];
    return this.http.get<IBooks[]>(this.baseUrl+this.getBooksSubUrl);
  }
  getOutOfStockBooks(): Observable<IBooks[]> {
    this.bookList = [];
    return this.http.get<IBooks[]>(this.baseUrl + this.getOutOfStockBooksSubUrl)
  }
}