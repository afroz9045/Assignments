import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIssueDto } from '../Models/IIssueDto';
import { IIssueVm } from '../Models/IIssueVm';

@Injectable({
  providedIn: 'root'
})
export class IssueService {


  constructor(private http:HttpClient) { }


   issueBook(issueDetails:IIssueVm):Observable<IIssueDto>{
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<IIssueDto>(environment.baseUrl+environment.issueBookSubUrl,issueDetails,{headers:headers})
  }


  getBooksIssue(){
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<IIssueDto>(environment.baseUrl+environment.getBooksIssueSubUrl,{headers:headers})
  }
}
