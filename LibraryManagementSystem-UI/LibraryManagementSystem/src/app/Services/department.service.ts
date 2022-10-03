import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDepartments } from '../Models/IDepartments';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 departmentList:IDepartments[]=[];
  constructor(private http:HttpClient){}
  baseUrl = 'https://localhost:7257/v1/Departments/';
getAllDepartments() {
    // debugger;
    this.departmentList = [];    
  return this.http.get(this.baseUrl)
}
}
