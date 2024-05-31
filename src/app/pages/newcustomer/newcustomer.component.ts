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
import { FormemailComponent } from "../../components/formemail/formemail.component";
import { FormaddressComponent } from "../../components/formaddress/formaddress.component";


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
        FormphoneComponent,
        FormemailComponent,
        FormaddressComponent
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
  email = []
  telefone = []
  endereco = []

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
    telefone: any[],
    email: any[],
    endereco:any[]
  ): boolean {
    return codigo == null || tipo == '' || nome == '' || apelido == '' || descricao == '' || tipoPessoa == '' || tipoDocumento == '' || identidade == '' || aniversario == '' || telefone.length == 0 || email.length == 0 || endereco.length == 0
  }

  isAllPhonesValid(phone: any) {
    for (let i = 0; i < phone.length; i++) {
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
  isAllEmailsValid(email: any) {
    for (let i = 0; i < email.length; i++) {
      if (email[i].type.code == '')
        return false
      if (email[i].type.name == '')
        return false
      if (email[i].address == '')
        return false
    }
    return true
  }
  isAllAddressValid(address:any) {
    for (let i = 0; i < address.length; i++) {
      if (address[i].type.code == '')
        return false
      if (address[i].type.name == '')
        return false
      if (address[i].street == '')
        return false
      if (address[i].number == '')
        return false
      if (address[i].neighborhood == '')
        return false
      if (address[i].city == '')
        return false
      if (address[i].state == '')
        return false
      if (address[i].country == '')
        return false
      if (address[i].postalCode == '')
        return false
    }
    return true
  }

  tipoCliente(option: string): string {
    switch (option) {
      case "1":
        return "Legal"
      case "2":
        return "Otário"
      case "3":
        return "Bobão"
    }
    return ''
  }
  tipoPessoa(option: string): string {
    switch (option) {
      case "1":
        return "Física"
      case "2":
        return "Jurídica"
    }
    return '';
  }
  tipoDocumento(option: string): string {
    switch (option) {
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
  tipoTelefoneEmailEndereco(option: string): string {
    switch (option) {
      case '1':
        return "Pessoal"
      case '2':
        return "Trabalho"
      case '3':
        return "Outro"
    }
    return ''
  }

  defineTelephone(phone: any) {
    for (let index = 0; index < phone.length; index++) {
      phone[index].type.name = this.tipoTelefoneEmailEndereco(phone[index].type.code)
    }
    this.telefone = phone
  }
  defineEmail(email: any) {
    for (let index = 0; index < email.length; index++) {
      email[index].type.name = this.tipoTelefoneEmailEndereco(email[index].type.code)
    }
    this.email = email
  }
  defineAddress(address: any) {
    for (let index = 0; index < address.length; index++) {
      address[index].type.name = this.tipoTelefoneEmailEndereco(address[index].type.code)
    }
    this.endereco = address
  }

  insertCustomer(): void {
    if (this.hasNull(this.codigo, this.tipo, this.nome, this.apelido, this.descricao, this.tipo_pessoa, this.tipo_documento, this.identidade, this.aniversario, this.telefone, this.email, this.endereco)) {
      alert("Insira todos os valores obrigatórios!");
      return;
    }
    if (!this.isAllPhonesValid(this.telefone)) {
      alert("Insira todos os valores obrigatórios!");
      return
    }
    if (!this.isAllEmailsValid(this.email)) {
      alert("Insira todos os valores obrigatórios!");
      return
    }
    if(!this.isAllAddressValid(this.endereco)) {
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
      addresses: this.endereco,
      phones: this.telefone,
      emails: this.email,
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
