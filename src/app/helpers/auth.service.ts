import { Injectable } from '@angular/core';
import { UserModel } from '../models';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: UserModel = new UserModel;
  userAuthorized: boolean = false;
  urlApi: string = "https://localhost:7230/"

  constructor(
    private httpClient: HttpClient,
  ) { }

  loginCurrentUser(){

    const urlComplet = this.urlApi + "api/Users/login/" + this.currentUser.email + "/" + this.currentUser.senha

    console.log(urlComplet)

    this.httpClient.get<string>(`${urlComplet}`).subscribe((response) => {
      console.log(response)
    })

    if(this.currentUser.email == 'teste' && this.currentUser.senha == 'teste'){
      this.userAuthorized = true;
      return true;
    }
    return false;
  }
}
