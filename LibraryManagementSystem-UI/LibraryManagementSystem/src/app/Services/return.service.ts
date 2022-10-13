import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IReturnDto } from '../Models/IReturnDto';
import { IReturnVm } from '../Models/IReturnVm';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {

  constructor(private http:HttpClient) { }

  returnBook(returnDetails:IReturnVm):Observable<IReturnDto>{
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<IReturnDto>(environment.baseUrl+environment.returnBookSubUrl,returnDetails,{headers:headers})
  }
}
