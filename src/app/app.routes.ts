import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./jugadores/jugadores.routes').then(m => m.JUGADORES_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
