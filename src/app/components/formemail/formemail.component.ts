import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface email {
  type: {
    code: string
    name: string
  }
  address: string
}

@Component({
  selector: 'app-formemail',
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
  templateUrl: './formemail.component.html',
  styleUrl: './formemail.component.scss'
})
export class FormemailComponent {
  
  @Output() eventEmit = new EventEmitter<any>();
  
  values: email[] = [
    {
      type: {
        code: '',
        name: ''
      },
      address: ''
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
      address: ''
    })
  }
  sendData(value: any) {
    this.eventEmit.emit(value)
  }
}
