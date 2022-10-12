import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAddStaff: boolean = false;
  user: string = '';
  parsedRole: any;
  constructor() { }
  userRoleVerify() {
    debugger;
    let role = localStorage.getItem("userTokenDecoded");
    this.parsedRole = JSON.parse(role ?? '');
  }
}
