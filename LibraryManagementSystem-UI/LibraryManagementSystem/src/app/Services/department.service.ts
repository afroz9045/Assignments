import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDepartments } from '../Models/IDepartments';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
 departmentList:IDepartments[]=[];

  constructor(private http:HttpClient){}

  baseUrl = environment.baseUrl;
  getDepartmentsSubUrl = environment.getDepartmentsSubUrl;

getAllDepartments():Observable<IDepartments[]> {
     debugger;
     let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.departmentList = [];    
  return this.http.get<IDepartments[]>(this.baseUrl+this.getDepartmentsSubUrl,{headers:headers})
}
}
