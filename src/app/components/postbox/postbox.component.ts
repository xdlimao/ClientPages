import { Component, Input, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-postbox',
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
  templateUrl: './postbox.component.html',
  styleUrl: './postbox.component.scss'
})
export class PostboxComponent {

  http = inject(HttpClient)

  @Input() path: string = "";
  @Input() body: string = "";

  urlvar!: string;

  data: any;

  ngOnInit() {
    this.urlvar = environment.url + this.path
  }

  scrollToEnd(input: HTMLInputElement): void {
    input.scrollLeft = input.scrollWidth;
  }

  sendRequest(): void {
    this.http.post(this.urlvar, JSON.parse(this.body))
      .subscribe(
        response => this.data = JSON.stringify(response, null, 4)
      )
  }
}
