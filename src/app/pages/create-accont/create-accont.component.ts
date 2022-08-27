import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
