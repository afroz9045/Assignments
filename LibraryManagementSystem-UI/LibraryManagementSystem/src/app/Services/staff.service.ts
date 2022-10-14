import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStaff } from '../Models/IStaff';
import { IStaffDto } from '../Models/IStaffDto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  addStaff(staff: IStaff): Observable<IStaffDto> {
    let token = localStorage.getItem("userToken");
    console.log(token);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    debugger
    return this.http.post<IStaffDto>(environment.baseUrl + environment.addStaffSubUrl, staff, { headers: headers });
  }

  getStaff():Observable<IStaffDto>{
    let token = localStorage.getItem("userToken");
    console.log(token);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<IStaffDto>(environment.baseUrl + environment.getStaffSubUrl,{headers:headers})
  }
}
