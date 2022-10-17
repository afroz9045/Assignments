import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { IBooks } from "../Models/IBooks";
import { environment } from "src/environments/environment";
import { IIssueVm } from "../Models/IIssueVm";
import { IBookVm } from "../Models/IBookVm";
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookList: IBooks[] = [];
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  getBooksSubUrl = environment.getBooksSubUrl;
  getOutOfStockBooksSubUrl = environment.getOutOfStockBooksSubUrl;
  addBookSubUrl = environment.addBookSubUrl;
  issueBookSubURl = environment.issueBookSubUrl;

  getAllBooks(): Observable<IBooks[]> {
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    // debugger;
    this.bookList = [];
    return this.http.get<IBooks[]>(this.baseUrl + this.getBooksSubUrl, { headers: headers });
  }

  getOutOfStockBooks(): Observable<IBooks[]> {
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.bookList = [];
    return this.http.get<IBooks[]>(this.baseUrl + this.getOutOfStockBooksSubUrl, { headers: headers })
  }

  addBook(bookDetails: IBookVm): Observable<IBooks> {
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<IBooks>(environment.baseUrl + environment.addBookSubUrl, bookDetails, { headers: headers })
  }
}