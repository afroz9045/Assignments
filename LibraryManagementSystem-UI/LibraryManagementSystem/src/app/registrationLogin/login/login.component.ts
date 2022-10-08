import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  
  onLogin(){
    let user:IUser={
       email: this.email,
       password: this.password
    }
    this.authService.login(user).subscribe((token:string)=>{
      console.log(token);
      localStorage.setItem('userToken',token)
    });
  }
}
