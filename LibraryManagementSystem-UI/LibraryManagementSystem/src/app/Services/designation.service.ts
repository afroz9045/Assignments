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

  onDesignationEdit(designationName: any, designationId: string): Observable<IDesignations> {
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<IDesignations>(this.baseUrl + environment.designationUpdate + designationId, designationName, { headers: headers })
  }

  deleteDesignation(designationId: string) {
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(environment.baseUrl + environment.deleteDesignation + designationId, { headers: headers })
  }
  addDesignation(designation: any): Observable<IDesignations> {
    debugger
    let token = localStorage.getItem("userToken");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<IDesignations>(environment.baseUrl + environment.addDesignation, designation, { headers: headers })
  }
}
