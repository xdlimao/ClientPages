import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-deletebox',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule
  ],
  templateUrl: './deletebox.component.html',
  styleUrl: './deletebox.component.scss'
})
export class DeleteboxComponent {
  http = inject(HttpClient);

  @Input() path: string = ""

  urlvar!: string;

  data: any;

  ngOnInit() {
    this.urlvar = environment.url + this.path
  }

  sendRequest(): void {
    this.http.delete(this.urlvar, {responseType: "text"})
      .subscribe(
        response => this.data = response
      );
  }

  scrollToEnd(input: HTMLInputElement): void {
    input.scrollLeft = input.scrollWidth;
  }
}