import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/helpers/auth.service';
import { UserModel } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel;

  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.currentUser.email = this.user.email;
    this.authService.currentUser.senha = this.user.senha;

    const loggedOk = this.authService.loginCurrentUser();

    if(loggedOk){
      this.router.navigate([''])
    }
  }

}
