import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  staffName: string ='';
  staffRole: string = '';
  isBookIssue:boolean = false;
  isBookReturn:boolean = false;
  isPenaltyCheck:boolean = false;

  constructor(private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.userRoleVerify();
    this.getLoggedInStaffDetails()
  }
  logout() {
    debugger
    localStorage.removeItem("userToken");
    localStorage.removeItem("userTokenDecoded");
    this.router.navigateByUrl('/');

  }
  getLoggedInStaffDetails(){
    debugger
    var loggedInStaff = this.userService.parsedRole;
    this.staffName = loggedInStaff.FullName;
    this.staffRole = loggedInStaff.Role;
    if(loggedInStaff.Role ==='Librarian'){
     this.isBookIssue = true;
     this.isBookReturn = true;
    }
    if(loggedInStaff.Role ==='Principle'||loggedInStaff.Role ==='Director'||loggedInStaff.Role ==='Librarian'){
      this.isPenaltyCheck = true;
    }
    console.log(this.staffName)
    console.log(this.staffRole)
  }
  addBook() {
    alert("Add Book Clicked!");
  }


}
