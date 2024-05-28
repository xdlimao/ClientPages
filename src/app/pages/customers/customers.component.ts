import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-customers',
    standalone: true,
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss',
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        RouterOutlet
    ]
})
export class CustomersComponent {

}
