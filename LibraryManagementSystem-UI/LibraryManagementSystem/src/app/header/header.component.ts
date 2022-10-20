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
  staffName: string | null = '';
  staffRole: string = '';
  isBookIssue: boolean = false;
  isBookReturn: boolean = false;
  isPenaltyCheck: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userRoleVerify();
    this.getLoggedInStaffDetails()
  }
  logout() {
    debugger
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
    this.router.navigateByUrl('/');

  }
  getLoggedInStaffDetails() {
    debugger
    var loggedInStaff = this.userService.parsedRole;
    var loggedInStaffName = this.userService.userName;
    console.log(`logged in staff is : ${loggedInStaff}`)
    this.staffName = loggedInStaffName;
    this.staffRole = loggedInStaff;
    if (loggedInStaff == 'Librarian') {
      this.isBookIssue = true;
      this.isBookReturn = true;
    }
    if (loggedInStaff == 'Principle' || loggedInStaff == 'Director' || loggedInStaff == 'Librarian') {
      this.isPenaltyCheck = true;
    }
    console.log(this.staffName)
    console.log(this.staffRole)

    console.log(`is book issue : ${this.isBookIssue}`)
    console.log(`is book return : ${this.isBookReturn}`)
    console.log(`is penaty Check : ${this.isPenaltyCheck}`)
  }
  



}
