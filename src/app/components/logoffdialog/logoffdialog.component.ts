import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogData } from '../deletecustomerdialog/deletecustomerdialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoffdialog',
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
  templateUrl: './logoffdialog.component.html',
  styleUrl: './logoffdialog.component.scss'
})
export class LogoffdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LogoffdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }
    router = inject(Router)

  onNoClick(): void {
    this.dialogRef.close();
  }
  onConfirmClick(): void {
    sessionStorage.setItem('token', '')
    this.dialogRef.close();
    this.router.navigate([''])
  }
}
