import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAddStaff: boolean = false;
  user: string = '';
  userName:string|null = '';
  parsedRole: any;


  constructor() { 
    this.userRoleVerify()
  }

  
  userRoleVerify() {
    debugger;
    let role = localStorage.getItem("userRole");
    this.userName = localStorage.getItem("userName");
    this.parsedRole = role
  }
}
