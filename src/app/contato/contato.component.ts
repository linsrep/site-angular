import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ListagemContatosComponent } from '../listagem-contatos/listagem-contatos.component';

@Component({
  selector: 'app-contato',
  imports: [HeaderComponent, FooterComponent, ListagemContatosComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class ContatoComponent {}
