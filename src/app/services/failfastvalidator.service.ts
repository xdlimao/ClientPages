import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FailfastvalidatorService {

  constructor() { }
  hasNull(
    codigo: number,
    tipo: string,
    nome: string,
    apelido: string,
    descricao: string,
    tipoPessoa: string,
    tipoDocumento: string,
    identidade: string,
    aniversario: string,
    telefone: any[],
    email: any[],
    endereco:any[]
  ): boolean {
    return codigo == null || tipo == '' || nome == '' || apelido == '' || descricao == '' || tipoPessoa == '' || tipoDocumento == '' || identidade == '' || aniversario == '' || telefone.length == 0 || email.length == 0 || endereco.length == 0
  }
  
  isAllPhonesValid(phone: any) {
    for (let i = 0; i < phone.length; i++) {
      if (phone[i].type.code == '')
        return false
      if (phone[i].type.name == '')
        return false
      if (phone[i].countryCode == '')
        return false
      if (phone[i].ddd == '')
        return false
      if (phone[i].phoneNumber == '')
        return false
    }
    return true;
  }
  isAllEmailsValid(email: any) {
    for (let i = 0; i < email.length; i++) {
      if (email[i].type.code == '')
        return false
      if (email[i].type.name == '')
        return false
      if (email[i].address == '')
        return false
    }
    return true
  }
  isAllAddressValid(address:any) {
    for (let i = 0; i < address.length; i++) {
      if (address[i].type.code == '')
        return false
      if (address[i].type.name == '')
        return false
      if (address[i].street == '')
        return false
      if (address[i].number == '')
        return false
      if (address[i].neighborhood == '')
        return false
      if (address[i].city == '')
        return false
      if (address[i].state == '')
        return false
      if (address[i].country == '')
        return false
      if (address[i].postalCode == '')
        return false
    }
    return true
  }
}
