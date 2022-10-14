import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDesignations } from '../Models/IDesignations';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http: HttpClient) { }
  designationList: IDesignations[] = [];


  baseUrl = environment.baseUrl;
  getDesignationSubUrl = environment.getDesignationSubUrl;

  getAllDesignations(): Observable<IDesignations[]> {
    debugger;
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.designationList = [];
    return this.http.get<IDesignations[]>(this.baseUrl + this.getDesignationSubUrl, { headers: headers })
  }
}
