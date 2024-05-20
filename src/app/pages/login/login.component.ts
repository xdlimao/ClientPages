import { Component } from '@angular/core';
import { LoginboxComponent } from '../../components/loginbox/loginbox.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginboxComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
