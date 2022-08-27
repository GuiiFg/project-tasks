import { Injectable } from '@angular/core';
import { UserModel } from '../../models';
import { HttpClient } from '@angular/common/http'
import { ResponseLogin } from '../../models/response-login';
import { Md5 } from  'ts-md5';

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
  ) { }

  loginCurrentUser(){

    const urlComplet = this.urlApi + "api/Users/login/"

    const postData = {
      email: this.currentUser.email,
      senha: Md5.hashStr(this.currentUser.senha)
    }

    this.http.post(urlComplet, postData).toPromise().then((response:any) => {
      this.responseLogin.statusCode = response.statusCode;
      this.responseLogin.msg = response.msg;
      this.responseLogin.userId = response.userId;
    })

    if(this.responseLogin.statusCode == 200){
      this.currentUser.id = this.responseLogin.userId;
      this.userAuthorized = true;
      return true;
    }
    return false;
  }
  
}
