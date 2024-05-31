import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http = inject(HttpClient)

  getCustomers(){
    return this.http.get(environment.url+"/customer", {headers:{'Authorization': `Bearer ${sessionStorage.getItem("token")}`}})
  }
  getCustomerById(id:any){
    return this.http.get(environment.url+`/customer/${id}`, {headers:{'Authorization': `Bearer ${sessionStorage.getItem("token")}`}})
  }
  deleteCustomer(id:string){
    return this.http.delete(environment.url+`/customer/${id}`,{responseType: 'text'})
  }
  insertCustomer(body:object){
    return this.http.post(environment.url + "/customer", body)
  }
}
