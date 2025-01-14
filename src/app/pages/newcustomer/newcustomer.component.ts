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
import { TypeDefinerService } from '../../services/type-definer.service';
import { FailfastvalidatorService } from '../../services/failfastvalidator.service';
import { ConvertStringToISOStringService } from '../../services/convert-string-to-isostring.service';


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
  _typeDefiner = inject(TypeDefinerService)
  _validator = inject(FailfastvalidatorService)
  _convertToISO = inject(ConvertStringToISOStringService)

  defineTelephone(phone: any) {
    for (let index = 0; index < phone.length; index++) {
      phone[index].type.name = this._typeDefiner.tipoTelefoneEmailEndereco(phone[index].type.code)
    }
    this.telefone = phone
  }
  defineEmail(email: any) {
    for (let index = 0; index < email.length; index++) {
      email[index].type.name = this._typeDefiner.tipoTelefoneEmailEndereco(email[index].type.code)
    }
    this.email = email
  }
  defineAddress(address: any) {
    for (let index = 0; index < address.length; index++) {
      address[index].type.name = this._typeDefiner.tipoTelefoneEmailEndereco(address[index].type.code)
    }
    this.endereco = address
  }

  insertCustomer(): void {
    if (this._validator.hasNull(this.codigo, this.tipo, this.nome, this.apelido, this.descricao, this.tipo_pessoa, this.tipo_documento, this.identidade, this.aniversario, this.telefone, this.email, this.endereco)) {
      alert("Insira todos os valores obrigatórios!");
      return;
    }
    if (!this._validator.isAllPhonesValid(this.telefone)) {
      alert("Insira todos os valores obrigatórios!");
      return
    }
    if (!this._validator.isAllEmailsValid(this.email)) {
      alert("Insira todos os valores obrigatórios!");
      return
    }
    if(!this._validator.isAllAddressValid(this.endereco)) {
      alert("Insira todos os valores obrigatórios!");
      return
    }

    let body: object =
    {
      code: this.codigo,
      type: {
        code: this.tipo,
        name: this._typeDefiner.tipoCliente(this.tipo)
      },
      name: this.nome,
      nickname: this.apelido,
      description: this.descricao,
      personType: {
        code: this.tipo_pessoa,
        name: this._typeDefiner.tipoPessoa(this.tipo_pessoa)
      },
      identityType: {
        code: this.tipo_documento,
        name: this._typeDefiner.tipoDocumento(this.tipo_documento)
      },
      identity: this.identidade,
      birthdate: this._convertToISO.convert(this.aniversario),
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
