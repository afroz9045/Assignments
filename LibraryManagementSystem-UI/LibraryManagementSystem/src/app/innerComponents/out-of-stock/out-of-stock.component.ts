import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/Models/IBooks';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styleUrls: ['./out-of-stock.component.css']
})
export class OutOfStockComponent implements OnInit {
  bookList: IBooks[] = [];
  errorMessage: string | undefined;
  constructor(private booksService: BooksService, private http: HttpClient) { }

  ngOnInit() {
    this.getOutOfStockBooks()
  }

  getOutOfStockBooks() {
    this.booksService.getOutOfStockBooks().subscribe((response) => {
      const outOfStockBooks = JSON.stringify(response);

      this.bookList = JSON.parse(outOfStockBooks)
      console.log(this.bookList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }
}
