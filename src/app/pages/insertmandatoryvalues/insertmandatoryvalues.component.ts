import { Component } from '@angular/core';
import { PostboxComponent } from '../../components/postbox/postbox.component';

@Component({
  selector: 'app-insertmandatoryvalues',
  standalone: true,
  imports: [PostboxComponent],
  templateUrl: './insertmandatoryvalues.component.html',
  styleUrl: './insertmandatoryvalues.component.scss'
})
export class InsertmandatoryvaluesComponent {
  bodyplaceholder:string =
  `{
    "code": 0,
    "type": {
      "code": 456,
      "name": "ExampleType"
    },
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
          "code": 333,
          "name": "Tipo de Email"
        },
        "address": "cliente@example.com"
      }
    ]
  }`
}
