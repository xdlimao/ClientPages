import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeDefinerService {

  constructor() { }

  tipoCliente(option: string): string {
    switch (option) {
      case "1":
        return "Legal"
      case "2":
        return "Otário"
      case "3":
        return "Bobão"
    }
    return ''
  }
  tipoPessoa(option: string): string {
    switch (option) {
      case "1":
        return "Física"
      case "2":
        return "Jurídica"
    }
    return '';
  }
  tipoDocumento(option: string): string {
    switch (option) {
      case "1":
        return "RG"
      case "2":
        return "CPF"
      case "3":
        return "CNH"
      case "4":
        return "CNPJ"
    }
    return ''
  }
  tipoTelefoneEmailEndereco(option: string): string {
    switch (option) {
      case '1':
        return "Pessoal"
      case '2':
        return "Trabalho"
      case '3':
        return "Outro"
    }
    return ''
  }
}
