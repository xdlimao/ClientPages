import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-endpoints',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule
  ],
  templateUrl: './endpoints.component.html',
  styleUrl: './endpoints.component.scss'
})
export class EndpointsComponent {
  showFiller = false;
}
