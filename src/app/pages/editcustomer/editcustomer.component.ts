import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormaddressComponent } from '../../components/formaddress/formaddress.component';
import { FormemailComponent } from '../../components/formemail/formemail.component';
import { FormphoneComponent } from '../../components/formphone/formphone.component';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { ConvertStringToISOStringService } from '../../services/convert-string-to-isostring.service';
import { CustomerService } from '../../services/customer.service';
import { FailfastvalidatorService } from '../../services/failfastvalidator.service';
import { TypeDefinerService } from '../../services/type-definer.service';

@Component({
  selector: 'app-editcustomer',
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
    HttpClientModule,
    FormphoneComponent,
    FormemailComponent,
    FormaddressComponent
  ],
  templateUrl: './editcustomer.component.html',
  styleUrl: './editcustomer.component.scss'
})
export class EditcustomerComponent {
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
  route = inject(ActivatedRoute)
  _customerService = inject(CustomerService)
  _typeDefiner = inject(TypeDefinerService)
  _validator = inject(FailfastvalidatorService)
  _convertToISO = inject(ConvertStringToISOStringService)

  ngOnInit() {
    this._customerService.getCustomerById(this.route.snapshot.paramMap.get('id')).subscribe((response: any) => {
      this.codigo = response.code
      this.tipo = response.type.code.toString()
      this.nome = response.name
      this.apelido = response.nickname
      this.descricao = response.description
      this.tipo_pessoa = response.personType.code.toString()
      this.tipo_documento = response.identityType.code.toString()
      this.identidade = response.identity
      this.avatar_url = response.avatar
      this.notas = response.note
      this.aniversario = response.birthdate
      for (let i = 0; i < response.phones.length; i++) {
        response.phones[i].type.code = response.phones[i].type.code.toString()
      }
      for (let i = 0; i < response.emails.length; i++) {
        response.emails[i].type.code = response.emails[i].type.code.toString()
      }
      for (let i = 0; i < response.emails.length; i++) {
        response.addresses[i].type.code = response.addresses[i].type.code.toString()
      }
      this.email = response.emails
      this.telefone = response.phones
      this.endereco = response.addresses
    })
  }

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

  updateCustomer() {
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
      id: this.route.snapshot.paramMap.get('id'),
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

    this._customerService.updateCustomer(body).subscribe(
      response => {
        alert("Atualizado com sucesso.")
        this.router.navigate(['customers'])
      },
      error => alert("Ocorreu algum erro, tente novamente.")
    )
  }
}
