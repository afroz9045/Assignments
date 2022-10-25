import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BookEditVm } from 'src/app/Models/BookEditVm';
import { bookStockUpdateVm } from 'src/app/Models/BookStockUpdateVm';
import { IBooks } from 'src/app/Models/IBooks';
import { IBookVm } from 'src/app/Models/IBookVm';
import { BooksService } from 'src/app/Services/books.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {
  userRole: string | null = "";
  bookList: IBooks[] = [];
  errorMessage: string | undefined;
  stockUpdateMessage: String = "";
  isUserCanAlter: boolean = false;
  bookId: any;

  editedBookName: string = "";
  editedIsbnNumber: string = "";
  editedAuthorName: string = "";
  editedBookEdition: string = "";


  constructor(private booksService: BooksService, private userService: UserService, private http: HttpClient) {

    this.getBooks()
  }

  ngOnInit() {

  }

  userValidate() {
    debugger
    this.userService.userRoleVerify();
    console.log(` User role is :${this.userRole}`)
    this.userRole = this.userService.parsedRole
    if (this.userRole === "Librarian") {
      this.isUserCanAlter = true;
    }
  }
  getBooks() {
    this.userValidate()
    this.booksService.getAllBooks().subscribe((response) => {
      const books = JSON.stringify(response);

      this.bookList = JSON.parse(books)
      console.log(this.bookList)
    }, (response) => {

      console.log(response)
      this.errorMessage = "Request failed.";
    });

  }

  stockUpdate(event: any, bookId: number) {
    debugger
    var updatedStock = event.target.value;
    let updatedStockDetail: bookStockUpdateVm = {
      BookId: bookId,
      StockToBeUpdate: updatedStock
    }
    this.booksService.stockUpdate(updatedStockDetail).subscribe((response) => {
      debugger
      console.log(response)
      console.log(response.stockUpdate);
      this.stockUpdateMessage = `Stock updated successfully updated stock is ${response.stockAvailable} `;
      Swal.fire({
        title: 'Stock Updated',
        text: `Stock updated successfully updated stock is ${response.stockAvailable} `,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    },
      err => {
        console.log(err.error)
        if (err.status == 404) {
          this.stockUpdateMessage = err.error
          alert(this.stockUpdateMessage);
        }
      })
  }

  onEditBook(bookId: number, index: number) {
    debugger
    console.log(index)
    console.log(`book id for edit is : ${bookId}`)
    this.bookId = bookId
    this.editedAuthorName = this.bookList[index].authorName
    this.editedBookEdition = this.bookList[index].bookEdition
    this.editedBookName = this.bookList[index].bookName
    this.editedIsbnNumber = this.bookList[index].isbn
  }

  editBook() {
    debugger
    let editedBookDetails: IBookVm = {
      authorName: this.editedAuthorName,
      bookEdition: this.editedBookEdition,
      bookName: this.editedBookName,
      isbn: this.editedIsbnNumber
    }

    this.booksService.editBook(this.bookId, editedBookDetails).subscribe((response) => {
      console.log(response)
      if (response) {
        Swal.fire({
          title: 'Book details updated',
          text: `Book with book id : ${this.bookId} updated successfully!`,
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(()=>{
          this.getBooks();
        })
      }
    },
      err => {
        console.log(err)
        Swal.fire({
          title: 'Book Delete Status',
          text: `${err.error} `,
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
        console.log(err.errorMessage)
      }
    )
  }
  onDeleteBook(bookId: number) {
    console.log(`book id for delete is : ${bookId}`)
    Swal.fire({
      title: 'Delete Confirmation',
      text: `Do you want to delete this book?`,
      icon: 'question',
      confirmButtonText: 'Yes',
      showCancelButton: true
    }).then((result) => {
      debugger
      console.log(result.isConfirmed)
      if (result.isConfirmed) {
        this.booksService.deleteBook(bookId).subscribe((response) => {
          console.log(response)
          Swal.fire({
            title: 'Book Delete Status',
            text: `Book with book id : ${bookId} deleted successfully!`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        },
          err => {
            console.log(err)
            Swal.fire({
              title: 'Book Delete Status',
              text: `${err.error} `,
              icon: 'warning',
              confirmButtonText: 'Ok'
            })
            console.log(err.errorMessage)
          })
      }
    })
  }
}

