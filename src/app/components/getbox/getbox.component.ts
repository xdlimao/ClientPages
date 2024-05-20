import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-getbox',
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
  templateUrl: './getbox.component.html',
  styleUrl: './getbox.component.scss'
})
export class GetboxComponent {
  http = inject(HttpClient);

  @Input() path: string = ""

  urlvar!: string;

  data: Array<any> = [];

  ngOnInit() {
    this.urlvar = environment.url + this.path
  }

  sendRequest(): void {
    this.http.get(this.urlvar)
      .subscribe(
        (response:any) => {console.log(response)},
      );
  }
}
