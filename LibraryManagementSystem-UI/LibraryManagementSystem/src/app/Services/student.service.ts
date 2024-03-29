import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStudentDto } from '../Models/IStudentDto';
import { IStudentVm } from '../Models/IStudentVm';

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

  addStudent(student:IStudentVm):Observable<IStudentDto>{
    let token = localStorage.getItem("userToken");
    console.log(token);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<IStudentDto>(environment.baseUrl + environment.addStudent,student,{headers:headers})
  }

  onStudentEdit(updatedStudent:any, studentId:number): Observable<IStudentDto> {
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<IStudentDto>(environment.baseUrl + environment.updateStudent + studentId, updatedStudent, { headers: headers })
  }
}
