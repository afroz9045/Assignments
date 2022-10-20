import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAddStaff: boolean = false;
  isAddBook :boolean = false;
  isAddDepartment:boolean = false;
  isAddDesignation:boolean = false;
  isAddStudent:boolean = false;
  isBooksOutOfStock:boolean = false;
  staffName:string='';
  staffRole:string = '';
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log("hello")
    this.roleVerify()
  }

  roleVerify(){
    var loggedInStaff = this.userService.parsedRole;
    console.log(loggedInStaff.FullName)
    this.staffName = loggedInStaff.FullName;
    this.staffRole = loggedInStaff.Role;
    if (loggedInStaff=== 'Principle' || loggedInStaff=== 'Director') {
      this.isAddStaff = true;
      this.isAddDepartment =true;
      this.isAddDesignation =true;
      this.isBooksOutOfStock = true;
      this.isAddStudent = true;
    }
    if(loggedInStaff==='Librarian'){
      this.isAddBook = true;
      this.isBooksOutOfStock = true;
    }
    if(loggedInStaff==='HOD'){
      this.isAddStudent = true;
    }
  }
}
