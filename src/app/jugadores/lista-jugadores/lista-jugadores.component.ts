// src/app/jugadores/lista-jugadores/lista-jugadores.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JugadoresDataService, Jugador } from '../../services/jugadores-data.service';

@Component({
  selector: 'app-lista-jugadores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  jugadores: Jugador[] = [];
  jugadoresOriginales: Jugador[] = [];
  posicionSeleccionada: string = 'todas';
  terminoBusqueda: string = '';
  cargando: boolean = true;

  constructor(
    private jugadoresService: JugadoresDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarJugadores();
  }

  cargarJugadores(): void {
    this.jugadoresService.getJugadores().subscribe({
      next: (data) => {
        this.jugadoresOriginales = data;
        this.jugadores = [...data];
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar jugadores:', error);
        this.cargando = false;
      }
    });
  }

  filtrarPorPosicion(): void {
    if (this.posicionSeleccionada === 'todas') {
      this.jugadores = [...this.jugadoresOriginales];
    } else {
      this.jugadores = this.jugadoresOriginales.filter(
        j => j.posicion.toLowerCase() === this.posicionSeleccionada.toLowerCase()
      );
    }
    this.aplicarBusqueda();
  }

  buscarJugadores(): void {
    this.aplicarBusqueda();
  }

  private aplicarBusqueda(): void {
    if (this.terminoBusqueda.trim()) {
      const termino = this.terminoBusqueda.toLowerCase();
      this.jugadores = this.jugadores.filter(j =>
        j.nombre.toLowerCase().includes(termino) ||
        j.apellido.toLowerCase().includes(termino) ||
        j.equipo.toLowerCase().includes(termino)
      );
    }
  }

  verDetalle(jugadorId: number): void {
    this.router.navigate(['/jugadores/detalle', jugadorId]);
  }

  limpiarFiltros(): void {
    this.posicionSeleccionada = 'todas';
    this.terminoBusqueda = '';
    this.jugadores = [...this.jugadoresOriginales];
  }
}