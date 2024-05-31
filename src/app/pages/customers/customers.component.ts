import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LogoffdialogComponent } from '../../components/logoffdialog/logoffdialog.component';


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
        RouterOutlet,
        MatFormFieldModule, 
        MatInputModule, 
        FormsModule
    ]
})
export class CustomersComponent {
    dialog = inject(MatDialog)
    logoff() {
        const dialogRef = this.dialog.open(LogoffdialogComponent)
    }
}
