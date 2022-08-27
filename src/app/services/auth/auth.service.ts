import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResponseLogin } from '../../models/users/response-login';
import { UserModel } from 'src/app/models/users/user';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: UserModel = new UserModel;
  userAuthorized: boolean = false;
  urlApi: string = "https://localhost:7230/"
  responseLogin : ResponseLogin = new ResponseLogin;

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  async loginCurrentUser(){

    const result = await this.userService.loginUser(this.currentUser.email, this.currentUser.senha)
    
    if(result){
      this.responseLogin = result
    }

    if(this.responseLogin.statusCode == 200){
      this.currentUser.id = this.responseLogin.userId;
      this.userAuthorized = true;
      return true;
    }
    return false;
  }
  
}
