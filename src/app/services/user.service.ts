import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseCreateUser } from '../models/response-create-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi : string = "https://localhost:7230/api/Users";
  response : ResponseCreateUser = new ResponseCreateUser;

  constructor(
    private http : HttpClient
  ) { }

  createUser(email: string, senha :string){
    const urlComplet = this.urlApi + "/createUser";
    const postData = {
        email: email,
        senha: senha
    }

    this.http.post(urlComplet, postData).toPromise().then((response:any) => {
      this.response.createdBit = response.createdBit;
      this.response.msg = response.msg;
      this.response.statusCode = response.statusCode;
    })

    return this.response;
  }
}
