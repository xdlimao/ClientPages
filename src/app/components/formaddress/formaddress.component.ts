import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CepService } from '../../services/cep.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface endereco {
  type: {
    code: string
    name: string
  }
  street: string
  number: string
  complement: string | null
  neighborhood: string
  city: string
  state: string
  country: string
  postalCode: string
}

@Component({
  selector: 'app-formaddress',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './formaddress.component.html',
  styleUrl: './formaddress.component.scss'
})
export class FormaddressComponent {
  @Output() eventEmit = new EventEmitter<any>();
  
  values: endereco[] = [
    {
      type: {
        code: '',
        name: ''
      },
      street: '',
      number: '',
      complement: null,
      neighborhood: '',
      city: '',
      state: '',
      country: '',
      postalCode: ''
    }
  ]

  cep = inject(CepService)

  getInfoByCEP(index:number){
    this.cep.getCep(this.values[index].postalCode).subscribe(
      (response:any) => {
        console.log(response)
        this.values[index].street = response.logradouro
        this.values[index].neighborhood = response.bairro
        this.values[index].city = response.localidade
        this.values[index].state = response.uf
        if(response.street != '')
          this.values[index].country = "Brasil"


      },
      error => {}
    )
  }

  removeValue(i: number) {
    this.values.splice(i, 1)
  }
  addValue() {
    this.values.push({
      type: {
        code: '',
        name: ''
      },
      street: '',
      number: '',
      complement: null,
      neighborhood: '',
      city: '',
      state: '',
      country: '',
      postalCode: ''
    })
  }
  sendData(value: any) {
    this.eventEmit.emit(value)
  }
}
