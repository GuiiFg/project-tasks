import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/users/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel;
  msgloginError: boolean = false;

  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    this.authService.currentUser.email = this.user.email;
    this.authService.currentUser.senha = this.user.senha;

    const loggedOk = await this.authService.loginCurrentUser();

    if(loggedOk){
      this.router.navigate([''])
    }else{
      this.msgloginError = true;
    }
  }

}
