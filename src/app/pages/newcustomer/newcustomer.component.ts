import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-newcustomer',
  standalone: true,
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './newcustomer.component.html',
  styleUrl: './newcustomer.component.scss'
})
export class NewcustomerComponent {
  codigo !: number
  tipo = ''
  nome = ''
  apelido = ''
  descricao = ''
  tipo_pessoa = ''
  tipo_documento = ''
  identidade = ''
  avatar_url:any;
  notas = ''
  aniversario = ''
  // email = {}
  // telefone = {}
  // endereço = {}

  http = inject(HttpClient)
  router = inject(Router)

  hasNull(
    codigo: number,
    tipo: string,
    nome: string,
    apelido: string,
    descricao: string,
    tipoPessoa: string,
    tipoDocumento: string,
    identidade: string
  ): boolean {
    return codigo == null || tipo == '' || nome == '' || apelido == '' || descricao == '' || tipoPessoa == '' || tipoDocumento == '' || identidade == ''
  }
  insertCustomer(): void {
    if (this.hasNull(this.codigo, this.tipo, this.nome, this.apelido, this.descricao, this.tipo_pessoa, this.tipo_documento, this.identidade)) {
      alert("Insira todos os valores obrigatórios!");
      return;
    }
    console.log(this.codigo)
    console.log(this.tipo)
    console.log(this.nome)
    console.log(this.apelido)
    console.log(this.descricao)
    console.log(this.tipo_pessoa)
    console.log(this.tipo_documento)
    console.log(this.identidade)
    console.log(this.notas)
    console.log(this.avatar_url)

    let stringtodate = new Date(this.aniversario)
    this.aniversario = stringtodate.toISOString();

    console.log(typeof(this.aniversario))
    let body =
    `{
    "code": ${this.codigo},
    "type": {
      "code": ${this.tipo},
      "name": "Placeholder"
    },
    "name": "${this.nome}",
    "nickname": "${this.apelido}",
    "description": "${this.descricao}",
    "personType": {
      "code": ${this.tipo_pessoa},
      "name": "Placeholder"
    },
    "identityType": {
      "code": ${this.tipo_documento},
      "name": "Placeholder"
    },
    "identity": "${this.identidade}",
    "birthdate": "${this.aniversario}",
    "addresses": [
      {
        "type": {
          "code": 1,
          "name": "Tipo de endereço"
        },
        "street": "Rua Exemplo",
        "number": "333",
        "complement": null,
        "neighborhood": "Bairro Exemplo",
        "city": "Cidade Exemplo",
        "state": "Estado Exemplo",
        "country": "País Exemplo",
        "postalCode": "CEP Exemplo"
      }
    ],
    "phones": [
      {
        "type": {
          "code": 111,
          "name": "Tipo de Telefone"
        },
        "countryCode": "+xxx",
        "ddd": "yy",
        "phoneNumber": "123456789"
      }
    ],
    "emails": [
      {
        "type": {
          "code": 333,
          "name": "Tipo de Email"
        },
        "address": "cliente@example.com"
      }
    ],
    "avatar":"${this.avatar_url}",
    "note":"${this.notas}"
  }`

  this.http.post(environment.url + "/customer", body, {  
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem("token")}`
  }}).subscribe(
    response => {
      alert("Criado com sucesso.")
      this.router.navigate(['customers'])
    },
    error => alert("Ocorreu algum erro, tente novamente.")
  )

  }
}
