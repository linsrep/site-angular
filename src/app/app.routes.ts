import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: AboutComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
];
