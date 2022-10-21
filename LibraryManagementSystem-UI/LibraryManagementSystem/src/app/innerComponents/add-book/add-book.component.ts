import { Component, OnInit } from '@angular/core';
import { IBookVm } from 'src/app/Models/IBookVm';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookName: string = "";
  isbn: any;
  authorName: string = "";
  bookEdition: string = "";
  responseMessage: string = "";
  isAlertShow: boolean = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
  }

  addBook() {
    debugger
    this.bookEdition == ""? this.bookEdition="Default":this.bookEdition
    let bookDetail: IBookVm = {
      authorName: this.authorName,
      
      bookEdition: this.bookEdition,
      bookName: this.bookName,
      isbn: this.isbn
    }
    let response = this.booksService.addBook(bookDetail).subscribe((res => {
      console.log(res);

      if (res.bookId !== null) {
        if (res.stockUpdate === true) {
          this.isAlertShow = true;
          this.responseMessage = "book stock updated";
          setTimeout(() => {
            this.isAlertShow = false;
          },
            5000);

        }
        else {
          this.isAlertShow = true;
          this.responseMessage = "book added successfully";
          setTimeout(() => {
            this.isAlertShow = false;
          },
            5000);
        }
      }
    }));

  }
}
