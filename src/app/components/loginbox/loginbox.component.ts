import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loginbox',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDividerModule,
    MatIconModule, 
    FormsModule, 
    ReactiveFormsModule],
  templateUrl: './loginbox.component.html',
  styleUrl: './loginbox.component.scss'
})
export class LoginboxComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Você deve inserir um email';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Email inválido';
    } else {
      this.errorMessage = 'Erro desconhecido';
    }
  }
  hide = true;
}
