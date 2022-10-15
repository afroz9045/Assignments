import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStudentDto } from '../Models/IStudentDto';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents():Observable<IStudentDto>{
    let token = localStorage.getItem("userToken");
    console.log(token);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<IStudentDto>(environment.baseUrl + environment.getStudentSubUrl,{headers:headers})
  }
}
