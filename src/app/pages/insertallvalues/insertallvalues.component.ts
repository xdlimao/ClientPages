import { Component } from '@angular/core';
import { PostboxComponent } from '../../components/postbox/postbox.component';

@Component({
  selector: 'app-insertallvalues',
  standalone: true,
  imports: [PostboxComponent],
  templateUrl: './insertallvalues.component.html',
  styleUrl: './insertallvalues.component.scss'
})
export class InsertallvaluesComponent {
  bodyplaceholder :string = 
  `{
    "code": 0,
    "type": {
      "code": 0,
      "name": "Type"
    },
    "name": "Nome do Cliente",
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
