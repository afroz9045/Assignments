import { Component, OnInit, ViewChild } from '@angular/core';
import { IIssueDto } from 'src/app/Models/IIssueDto';
import { IssueService } from 'src/app/Services/issue.service';

@Component({
  selector: 'app-books-issued',
  templateUrl: './books-issued.component.html',
  styleUrls: ['./books-issued.component.css']
})
export class BooksIssuedComponent implements OnInit {
  booksIssuedList:IIssueDto[]=[];
  constructor(private issueService:IssueService) {
    this.getBooksIssued();
   }

  ngOnInit(): void {
  }

  getBooksIssued(){
    debugger
    this.issueService.getBooksIssue().subscribe((response)=>{
      const booksIssued = JSON.stringify(response);

      this.booksIssuedList = JSON.parse(booksIssued)
      console.log(this.booksIssuedList)
    })
  }
}
