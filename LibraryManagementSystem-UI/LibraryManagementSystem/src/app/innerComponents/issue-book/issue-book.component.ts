import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IIssueVm } from 'src/app/Models/IIssueVm';
import { IssueService } from 'src/app/Services/issue.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  selectedValue:string = "";
  bookId:any;
  studentId:any;
  staffId:any;
  staff:boolean=false;
  student:boolean = false;
  issueSuccessAlert:boolean= false;
  constructor(private http:HttpClient,private issueService:IssueService) { }

  ngOnInit(): void {
    
  }
  onDropDownChange(event:any){
    console.log(event.target.value)
    if(event.target.value=="Student"){
      this.selectedValue = "Student";
      this.student = true;
      this.staff = false;
    }
    else if(event.target.value=="Staff"){
      this.selectedValue = "Staff"
      
      this.staff = true;
      this.student = false;
      
    }
    else{
      this.selectedValue = "";
      this.student = false;
      this.staff = false;
    }
  }

  issueBook(){
    debugger
    let issueDetail:IIssueVm={
      BookID : this.bookId,
      StaffId:this.staffId,
      StudentId:this.studentId
   }
   this.issueService.issueBook(issueDetail).subscribe((issueResponse)=>{
    if(issueResponse!==null||issueResponse!==undefined){
      setTimeout(() => {
        this.issueSuccessAlert=true;
      }, 10000);
    }
    console.log(issueResponse.IssueId)
    console.log(issueResponse.BookID);
    console.log(issueResponse.IssuedTo);
   })


  }

}
