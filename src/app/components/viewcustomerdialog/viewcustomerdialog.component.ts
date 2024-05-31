import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { DialogData } from '../deletecustomerdialog/deletecustomerdialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-viewcustomerdialog',
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
  ],
  templateUrl: './viewcustomerdialog.component.html',
  styleUrl: './viewcustomerdialog.component.scss'
})
export class ViewcustomerdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewcustomerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:string,
  ) {}
  
  customer:any
  _customerService = inject(CustomerService)

  ngOnInit () {
    this._customerService.getCustomerById(this.data).subscribe(response => {
      this.customer = response
    })    
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
