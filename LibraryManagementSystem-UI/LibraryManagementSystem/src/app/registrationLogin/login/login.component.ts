import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { AuthService } from 'src/app/Services/auth.service';
import { JwtDecodeService } from 'src/app/Services/jwt-decode.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  constructor(private authService:AuthService,private jwtDecode:JwtDecodeService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onLogin(){
    let user:IUser={
       email: this.email,
       password: this.password
    }
    this.authService.login(user).subscribe((token:string)=>{
      console.log(token);

      var decodedToken = this.jwtDecode.tokenDecode(token);
      const tokenDecoded = JSON.stringify(decodedToken)
      var tokenInformation = JSON.parse(tokenDecoded);
      console.log(tokenInformation['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
      console.log(tokenInformation.Email);
      console.log(tokenInformation);
      localStorage.setItem('userToken',token)
      localStorage.setItem('userTokenDecoded',tokenDecoded)
      this.router.navigate(['/home']);
    });
  }
}
