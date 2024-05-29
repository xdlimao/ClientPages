import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface telefone {
  type: {
    code: string
    name: string
  }
  countryCode: string
  ddd: string
  phoneNumber: string
}

@Component({
  selector: 'app-formphone',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './formphone.component.html',
  styleUrl: './formphone.component.scss'
})
export class FormphoneComponent {

  @Output() eventEmit = new EventEmitter<any>();

  values: telefone[] = [
    {
      type: {
        code: '',
        name: ''
      },
      countryCode: '',
      ddd: '',
      phoneNumber: ''
    }
  ]

  removeValue(i: number) {
    this.values.splice(i, 1)
  }
  addValue() {
    this.values.push({
      type: {
        code: '',
        name: ''
      },
      countryCode: '',
      ddd: '',
      phoneNumber: ''
    })
  }

  sendData(value: any) {
    this.eventEmit.emit(value)
  }
}
