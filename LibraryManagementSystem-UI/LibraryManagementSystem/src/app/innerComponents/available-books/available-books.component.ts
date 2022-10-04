import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/Models/IBooks';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {
  bookList: IBooks[] = [];
  errorMessage: string | undefined;

  constructor(private booksService: BooksService, private http: HttpClient) { }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this.booksService.getAllBooks().subscribe((response) => {
      const books = JSON.stringify(response);

      this.bookList = JSON.parse(books)
      console.log(this.bookList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }

}

