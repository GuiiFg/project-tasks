import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Md5 } from  'ts-md5';

@Component({
  selector: 'app-create-accont',
  templateUrl: './create-accont.component.html',
  styleUrls: ['./create-accont.component.css']
})
export class CreateAccontComponent implements OnInit {

  email : string = "";
  confirmaEmail : string = "";
  senha : string = "";
  confirmaSenha : string = "";
  msgAlert : string = "";

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const validated = this.validadeData()

    if(validated){
      const senhaMd5 = Md5.hashStr(this.senha)
      const response = this.userService.createUser(this.email, senhaMd5)

      if(response.statusCode == 200){
        this.msgAlert = "Conta criada! Retorne para tela de login e aproveite!"
      }
      if(response.statusCode == 400){
        this.msgAlert = "Erro ao criar conta! Tente outro email!"
      }
    }
  }

  validadeData(){
    this.msgAlert = ""
    let dataok = true;
    if(this.confirmaEmail != this.email){
      this.msgAlert += "Emails diferentes!\n"
      dataok = false;
    }
    if(this.confirmaSenha != this.senha){
      this.msgAlert += "Senhas diferentes! "
      dataok = false;
    }

    return dataok;
  }

}
