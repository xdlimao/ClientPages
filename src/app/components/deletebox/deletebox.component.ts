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
    this.http.delete('https://localhost:7036/customer/164ed24b-3104-4441-aa95-a544d679f5c3')
    .subscribe(() => console.log('Delete successful'));
  }

  sendRequest(): void {
    this.http.delete(this.urlvar)
      .subscribe(
        response => this.data = response
      );
  }

  scrollToEnd(input: HTMLInputElement): void {
    input.scrollLeft = input.scrollWidth;
  }
}
