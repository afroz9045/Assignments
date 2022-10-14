import { Component, OnInit } from '@angular/core';
import { IReturnVm } from 'src/app/Models/IReturnVm';
import { ReturnService } from 'src/app/Services/return.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {
  issueId: any;
  returnSuccessAlert: boolean = false;
  isCheckPenaltyModal: boolean = false;
  errorMsg :string = '';

  constructor(private returnBookService: ReturnService) { }

  ngOnInit(): void {
  }

  returnBook() {
    debugger
    
    let returnDetail: IReturnVm = {
      IssueId: this.issueId
    }
    
    let response = this.returnBookService.returnBook(returnDetail).subscribe(
      (returnBookResponse) => {
        if (returnBookResponse !== null || returnBookResponse !== undefined) {
          setTimeout(() => {
            this.returnSuccessAlert = true;
          }, 10000);
          console.log(returnBookResponse.ReturnId);
          console.log(returnBookResponse.ReturnDate);
        }
      },
      err => {
        console.log(err.error)
        if (err.status ==400) {
          this.isCheckPenaltyModal = true;
          this.errorMsg = err.error
        }
      }
    )
    console.log(response);
  }

}
