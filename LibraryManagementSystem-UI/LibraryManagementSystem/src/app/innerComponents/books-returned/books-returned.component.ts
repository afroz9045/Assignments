import { Component, OnInit } from '@angular/core';
import { IReturnDto } from 'src/app/Models/IReturnDto';
import { ReturnService } from 'src/app/Services/return.service';

@Component({
  selector: 'app-books-returned',
  templateUrl: './books-returned.component.html',
  styleUrls: ['./books-returned.component.css']
})
export class BooksReturnedComponent implements OnInit {
  booksReturnedList:IReturnDto[] = [];

  constructor(private returnService:ReturnService) { 
    this.getBooksReturned();
  }

  ngOnInit(): void {
  }

  getBooksReturned(){
    this.returnService.getBooksReturned().subscribe((response)=>{
      const booksReturned = JSON.stringify(response);

      this.booksReturnedList = JSON.parse(booksReturned)
      console.log(this.booksReturnedList)
    })
  }
}
