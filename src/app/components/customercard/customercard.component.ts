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
  constructor(public dialog: MatDialog) {}

  getCustomers(){
    this.http.get(environment.url + "/customer", {  
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem("token")}`
    }}).subscribe(
      response => {
        this.data = response
      }
    )
  }

  ngOnInit() {
    this.getCustomers();
  }

  deleteCustomer(id:string):void {
    const dialogRef = this.dialog.open(DeletecustomerdialogComponent, {data: {identity: id}})
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }
}
