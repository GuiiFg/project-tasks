import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ResponseLogin } from 'src/app/models/users/response-login';
import { Md5 } from 'ts-md5';
import { ResponseCreateUser } from '../../models/users/response-create-user';

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

    return this.http.post<ResponseCreateUser>(urlComplet, postData).toPromise()
  }

  loginUser(email: string, senha :string) {

    const postData = {
      email: email,
      senha: Md5.hashStr(senha)
    }

    const urlComplet = this.urlApi + "/login";

    return this.http.post<ResponseLogin>(urlComplet, postData).toPromise()
  }
}
