import { Routes } from '@angular/router';
import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';
import { DetalleJugadorComponent } from './detalle-jugador/detalle-jugador.component';

export const JUGADORES_ROUTES: Routes = [
  {
    path: '',
    component: ListaJugadoresComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleJugadorComponent
  }
];