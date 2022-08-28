import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
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

  async onSubmit(){
    const validated = this.validadeData()

    if(validated){
      const senhaMd5 = Md5.hashStr(this.senha)
      const response = await this.userService.createUser(this.email, senhaMd5)

      if (response){
        if(response.statusCode == 200){
          this.msgAlert = "Conta criada! Retorne para tela de login e aproveite!"
        }
        if(response.statusCode == 400){
          this.msgAlert = "Erro ao criar conta! Tente outro email!"
        }
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
    if(this.email == ""){
      this.msgAlert += "Email não pode estar vazio!\n"
      dataok = false;
    }
    if(this.senha == ""){
      this.msgAlert += "Senha não pode estar vazia!\n"
      dataok = false;
    }

    return dataok;
  }

}
