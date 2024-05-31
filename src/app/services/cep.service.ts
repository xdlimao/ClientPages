import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  http = inject(HttpClient)
  constructor() { }

  getCep(cep:string){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
  }
}
