import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertStringToISOStringService {

  constructor() { }

  convert(input:string){
    let stringtodate = new Date(input)
    return stringtodate.toISOString();
  }
}
