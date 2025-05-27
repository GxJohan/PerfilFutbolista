// src/app/jugadores/detalle-jugador/detalle-jugador.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { JugadoresDataService, Jugador } from '../../services/jugadores-data.service';

@Component({
  selector: 'app-detalle-jugador',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-jugador.component.html',
  styleUrls: ['./detalle-jugador.component.css']
})
export class DetalleJugadorComponent implements OnInit {
  jugador: Jugador | undefined;
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private jugadoresService: JugadoresDataService
  ) { }

  ngOnInit(): void {
    this.cargarJugador();
  }

  cargarJugador(): void {
    // Obtener el ID del jugador desde los parámetros de la ruta
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      const jugadorId = parseInt(id, 10);
      
      this.jugadoresService.getJugadorPorId(jugadorId).subscribe({
        next: (data) => {
          this.jugador = data;
          this.cargando = false;
          
          if (!data) {
            // Si no se encuentra el jugador, redirigir a la lista
            this.router.navigate(['/jugadores']);
          }
        },
        error: (error) => {
          console.error('Error al cargar el jugador:', error);
          this.cargando = false;
          this.router.navigate(['/jugadores']);
        }
      });
    } else {
      this.router.navigate(['/jugadores']);
    }
  }

  volver(): void {
    this.location.back();
  }

  calcularPorcentajeGoles(): number {
    if (!this.jugador || this.jugador.estadisticas.partidos === 0) return 0;
    return Math.round((this.jugador.estadisticas.goles / this.jugador.estadisticas.partidos) * 100);
  }

  calcularPorcentajeAsistencias(): number {
    if (!this.jugador || this.jugador.estadisticas.partidos === 0) return 0;
    return Math.round((this.jugador.estadisticas.asistencias / this.jugador.estadisticas.partidos) * 100);
  }
  
  obtenerCodigoPais(nacionalidad: string): string {
    const paises: {[key: string]: string} = {
      'Argentina': 'ar',
      'Francia': 'fr',
      'Noruega': 'no',
      'Bélgica': 'be',
      'Brasil': 'br',
      'España': 'es',
      'Portugal': 'pt',
      'Alemania': 'de',
      'Inglaterra': 'gb-eng',
      'Italia': 'it'
    };
    return paises[nacionalidad] || 'un';
  }
}