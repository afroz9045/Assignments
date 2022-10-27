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
  email: string = '';
  password: string = '';
  isInvalidCredentials: boolean = false;
  errorMessage: string = ""
  constructor(private authService: AuthService, private jwtDecode: JwtDecodeService, private router: Router) { }

  userRole: string = ""
  ngOnInit(): void {
  }
  tokenInformation: any;
  onLogin() {
    let user: IUser = {
      email: this.email,
      password: this.password
    }
    this.authService.login(user).subscribe((token: string) => {
      console.log(token);

      var decodedToken = this.jwtDecode.tokenDecode(token);
      console.log(typeof decodedToken)
      const tokenDecoded = JSON.stringify(decodedToken)
      this.tokenInformation = JSON.parse(tokenDecoded);
      console.log(this.tokenInformation)
      this.userRole = this.tokenInformation.Role
      localStorage.setItem("userRole", this.userRole)
      localStorage.setItem("userName", this.tokenInformation.FullName)
      localStorage.setItem('userToken', token)

      this.router.navigate(['/home']);
    }, (err) => {
      console.log(err)
      if (err.status === 400) {
        this.isInvalidCredentials = true;
        this.errorMessage = err.error
        console.log("Error message is :" + this.errorMessage)
      }
    });
  }
}
