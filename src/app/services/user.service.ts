import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient)

  auth(body:object) {
    return this.http.post(environment.url + "/auth", body, {responseType: 'text'})
  }
}
