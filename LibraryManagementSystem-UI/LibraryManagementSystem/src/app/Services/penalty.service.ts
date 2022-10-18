import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IPenaltyDto } from '../Models/IPenaltyDto';
import { PayPenaltyVm } from '../Models/PayPenaltyVm';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

  constructor(private http:HttpClient) { }

  checkPenalty(issueId:number):Observable<IPenaltyDto>{
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    console.log(`issue id in penalty service :${issueId}`)
    let url = environment.baseUrl+environment.penaltyCheckSubUrl;
    return this.http.get<IPenaltyDto>(url+issueId,{headers:headers});
  }

  payPenalty(penalty:PayPenaltyVm):Observable<string>{
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    let url = environment.baseUrl+environment.payPenaltySubUrl;
    return this.http.post<string>(url,penalty,{headers:headers});
  }
}
