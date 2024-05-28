import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-customercard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ],
  templateUrl: './customercard.component.html',
  styleUrl: './customercard.component.scss'
})
export class CustomercardComponent {

}
