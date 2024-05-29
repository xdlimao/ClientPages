import { Component, Inject, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

export interface DialogData {
  identity: string
}

@Component({
  selector: 'app-deletecustomerdialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    HttpClientModule
  ],
  templateUrl: './deletecustomerdialog.component.html',
  styleUrl: './deletecustomerdialog.component.scss'
})
export class DeletecustomerdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletecustomerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private http:HttpClient,
    private router: Router
  ) {}
  _customerService = inject(CustomerService)
  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmDelete(): void{
    this._customerService.deleteCustomer(this.data.identity).subscribe()
    this.onNoClick()
  }
}
