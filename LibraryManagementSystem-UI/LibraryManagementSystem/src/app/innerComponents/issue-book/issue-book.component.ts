import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  selectedValue:string = "";
  bookID:any;

  staff:boolean=false;
  student:boolean = false;
  constructor(private http:HttpClient) { }

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

  }

}
