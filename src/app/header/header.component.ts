import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: '../home/home.component.css',
})
export class HeaderComponent {
  isLoggedIn = true;
  user = 'visitante';
  description = 'Esta é uma página feita em AngularJS';
  dataHoje = 'Hoje é sexta-feira, 07 de fevereiro de 2025';

  menu = [
    { title: 'Início', link: '#' },
    { title: 'Quem somos', link: '/aboutus' },
    { title: 'Projetos', link: '/project' },
    { title: 'Contato', link: '/contato' },
  ];
}
