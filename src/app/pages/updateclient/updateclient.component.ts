import { Component } from '@angular/core';
import { PutboxComponent } from '../../components/putbox/putbox.component';

@Component({
  selector: 'app-updateclient',
  standalone: true,
  imports: [PutboxComponent],
  templateUrl: './updateclient.component.html',
  styleUrl: './updateclient.component.scss'
})
export class UpdateclientComponent {
  bodyplaceholder:string =
  `{
    "id": "00000000-0000-0000-0000-000000000000",
    "code": 0,
    "name": "Nome do Cliente",
    "type": {
      "code": 0,
      "name": "ExampleType"
    },
    "nickname": "Apelido",
    "description": "Descrição do cliente",
    "personType": {
      "code": 0,
      "name": "Tipo de Pessoa"
    },
    "identityType": {
      "code": 0,
      "name": "Tipo de Identidade"
    },
    "identity": "Número de Identidade",
    "birthdate": "1990-01-01T00:00:00Z",
    "enabled": true,
    "addresses": [
      {
        "type": {
          "code": 0,
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
          "code": 0,
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
          "code": 0,
          "name": "Tipo de Email"
        },
        "address": "cliente@example.com"
      }
    ],
    "avatar": "URL da Imagem",
    "image": "URL da Imagem",
    "color": "#ffffff",
    "referenceCode": "Código de Referência",
    "note": "Observações adicionais"
  }`
}
