import { Component, OnInit } from '@angular/core';
import { IReturnVm } from 'src/app/Models/IReturnVm';
import { ReturnService } from 'src/app/Services/return.service';
import Swal from 'sweetalert2';

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
          Swal.fire({
            title: 'Book Return Status',
            text: `Book return successfully with issue id : ${this.issueId}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          console.log(returnBookResponse.returnId);
          console.log(returnBookResponse.returnDate);
        }
      },
      err => {
        console.log(err.error)
        if (err.status ==400) {
          Swal.fire({
            title: 'Book Return Status',
            text: `Book is already returned with issue id : ${this.issueId}`,
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
        }
      }
    )
    console.log(response);
  }

}
