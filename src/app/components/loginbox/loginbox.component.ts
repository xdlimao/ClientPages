import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './loginbox.component.html',
  styleUrl: './loginbox.component.scss'
})
export class LoginboxComponent {
 
  user = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  errorMessage = '';

  http = inject(HttpClient)
  router = inject(Router)
  
  hide = true;

  sendLogin(): void {
    let body: object = {
      login: this.user.value,
      password: this.password.value
    }
    this.http.post(environment.url + "/auth", body, { responseType: "text" })
      .subscribe(
        response => {
          sessionStorage.setItem("token", response)
          this.router.navigate(["endpoints"])
        },
        error => alert(error.error)
      )
  }
}
