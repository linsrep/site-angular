import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem-contatos',
  imports: [],
  templateUrl: './listagem-contatos.component.html',
  styleUrl: './listagem-contatos.component.css',
})

export class ListagemContatosComponent {
   contatos = [
    {
      id: 1,
      name: 'Daniel Teste',
      whatsapp: '+55 (18) 99647-0000',
    },
    {
      id: 2,
      name: 'Ricardo Teste',
      whatsapp: '+55 (18) 99647-0000',
    },
    {
      id: 3,
      name: 'João Teste',
      whatsapp: '+55 (18) 99647-0000'
    },
    {
      id: 4,
      name: 'Aline Teste',
      whatsapp: '+55 (18) 99647-0000'
    },
  ];
}
