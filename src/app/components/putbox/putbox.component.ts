import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-putbox',
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
  templateUrl: './putbox.component.html',
  styleUrl: './putbox.component.scss'
})
export class PutboxComponent {

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
    this.http.put(this.urlvar, JSON.parse(this.body), {observe: "response"})
      .subscribe(
        response => {
          if (response.status == 404)
            this.data = "Id not found"
          this.data = JSON.stringify(response.body, null, 4)
        }
      )
  }
}
