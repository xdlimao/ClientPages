import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-newcustomer',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule
  ],
  templateUrl: './newcustomer.component.html',
  styleUrl: './newcustomer.component.scss'
})
export class NewcustomerComponent {

}
