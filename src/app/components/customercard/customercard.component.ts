import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { environment } from '../../../environments/environment.development';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DeletecustomerdialogComponent } from '../deletecustomerdialog/deletecustomerdialog.component';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { ViewcustomerdialogComponent } from '../viewcustomerdialog/viewcustomerdialog.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customercard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule, 
    FormsModule
    ],
  templateUrl: './customercard.component.html',
  styleUrl: './customercard.component.scss'
})
export class CustomercardComponent {

  data!:any;
  http = inject(HttpClient)
  router = inject(Router)
  _customerService = inject(CustomerService)
  constructor(public dialog: MatDialog) {}

  getCustomers(){
    this._customerService.getCustomers().subscribe( response => this.data = response )
  }
  ngOnInit() {
    this.getCustomers();
  }

  expandDetails(id:string):void {
    const dialogRef = this.dialog.open(ViewcustomerdialogComponent, {height: '850px', width:'1700px', data: id})
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }
  
  updateCustomer (id:string) {
    this.router.navigate(['customers/editcustomer', id])
  }

  deleteCustomer(id:string):void {
    const dialogRef = this.dialog.open(DeletecustomerdialogComponent, {data: {identity: id}})
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }
}
