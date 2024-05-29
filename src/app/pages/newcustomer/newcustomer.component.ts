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
import { CustomerService } from '../../services/customer.service';
import { FormphoneComponent } from "../../components/formphone/formphone.component";


@Component({
    selector: 'app-newcustomer',
    standalone: true,
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, provideNativeDateAdapter()],
    templateUrl: './newcustomer.component.html',
    styleUrl: './newcustomer.component.scss',
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
        HttpClientModule,
        FormphoneComponent
    ]
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
  avatar_url: any;
  notas = ''
  aniversario = ''
  // email = []
  telefone = []
  // endereço = []

  http = inject(HttpClient)
  router = inject(Router)
  _customerService = inject(CustomerService)

  hasNull(
    codigo: number,
    tipo: string,
    nome: string,
    apelido: string,
    descricao: string,
    tipoPessoa: string,
    tipoDocumento: string,
    identidade: string,
    aniversario: string,
    telefone:any[]
  ): boolean {
    return codigo == null || tipo == '' || nome == '' || apelido == '' || descricao == '' || tipoPessoa == '' || tipoDocumento == '' || identidade == '' || aniversario == '' || telefone.length == 0
  }

  isAllPhonesValid(phone:any){
    for (let i = 0; i < phone.length; i++){
      if (phone[i].type.code == '')
        return false
      if (phone[i].type.name == '')
        return false
      if (phone[i].countryCode == '')
        return false
      if (phone[i].ddd == '')
        return false
      if (phone[i].phoneNumber == '')
        return false
    }
    return true;
  }

  tipoCliente(option:string):string{
    switch (option)
    {
      case "1":
        return "Legal"
      case "2":
        return "Otário"
      case "3":
        return "Bobão"
    }
    return ''
  }
  tipoPessoa(option:string):string{
    switch (option){
      case "1":
        return "CPF"
      case "2":
        return "CNPJ"
    }
    return '';
  }
  tipoDocumento(option:string):string{
    switch (option){
      case "1":
        return "RG"
      case "2":
        return "CPF"
      case "3":
        return "CNH"
      case "4":
        return "CNPJ"
    }
    return ''
  }
  tipoTelefone(option:string):string{
    switch(option){
      case '1':
        return "Pessoal"
      case '2':
        return "Trabalho"
      case '3':
        return "Outro"
    }
    return ''
  }

  defineTelephone(phone:any){
    for (let index = 0; index < phone.length; index++) {
      phone[index].type.name = this.tipoTelefone(phone[index].type.code)     
    }
    this.telefone = phone
    console.log(this.telefone)
  }

  insertCustomer(): void {
    if (this.hasNull(this.codigo, this.tipo, this.nome, this.apelido, this.descricao, this.tipo_pessoa, this.tipo_documento, this.identidade, this.aniversario, this.telefone)) {
      alert("Insira todos os valores obrigatórios!");
      return;
    }
    if(!this.isAllPhonesValid(this.telefone)){
      alert("Insira todos os valores obrigatórios!");
      return
    }

    let stringtodate = new Date(this.aniversario)
    this.aniversario = stringtodate.toISOString();

    let body: object =
    {
      code: this.codigo,
      type: {
        code: this.tipo,
        name: this.tipoCliente(this.tipo)
      },
      name: this.nome,
      nickname: this.apelido,
      description: this.descricao,
      personType: {
        code: this.tipo_pessoa,
        name: this.tipoPessoa(this.tipo_pessoa)
      },
      identityType: {
        code: this.tipo_documento,
        name: this.tipoDocumento(this.tipo_documento)
      },
      identity: this.identidade,
      birthdate: this.aniversario,
      addresses: [
        {
          type: {
            code: 1,
            name: "Tipo de endereço"
          },
          street: "Rua Exemplo",
          number: "333",
          complement: null,
          neighborhood: "Bairro Exemplo",
          city: "Cidade Exemplo",
          state: "Estado Exemplo",
          country: "País Exemplo",
          postalCode: "CEP Exemplo"
        }
      ],
      phones: this.telefone, 
      emails: [
        {
          type: {
            code: 333,
            name: "Tipo de Email"
          },
          address: "cliente@example.com"
        }
      ],
      avatar: this.avatar_url,
      note: this.notas
    }

    this._customerService.insertCustomer(body).subscribe(
      response => {
        alert("Criado com sucesso.")
        this.router.navigate(['customers'])
      },
      error => alert("Ocorreu algum erro, tente novamente.")
    )
  }
}
