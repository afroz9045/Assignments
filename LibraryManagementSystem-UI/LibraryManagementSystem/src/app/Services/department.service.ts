import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartments } from '../Models/IDepartments';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 departmentList:IDepartments[]=[];
  constructor(private http:HttpClient){}
  baseUrl = 'https://localhost:7257/v1/Departments/';
getAllDepartments():Observable<IDepartments[]> {
    // debugger;
    this.departmentList = [];    
  return this.http.get<IDepartments[]>(this.baseUrl)
}
}
