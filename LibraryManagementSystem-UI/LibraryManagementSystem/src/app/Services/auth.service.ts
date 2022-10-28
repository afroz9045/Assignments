import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../Models/IUser';
import { IUserToken } from '../Models/IUserToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authBaseUrl = environment.baseUrlAuth;
  loginSubUrl = environment.loginAuthSubUrl;

  constructor(private http: HttpClient) { }

  
  login(user: IUser): Observable<string> {
    return this.http.post(environment.baseUrlAuth + environment.loginAuthSubUrl, user, { responseType: 'text' });
  }

deleteUser(staffId:string){
  return this.http.delete(environment.baseUrlAuth+environment.deleteUser+staffId)
}
  }