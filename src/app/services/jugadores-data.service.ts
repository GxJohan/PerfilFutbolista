// src/app/services/jugadores-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  posicion: string;
  dorsal: number;
  nacionalidad: string;
  edad: number;
  equipo: string;
  liga: string;
  imagen: string;
  estadisticas: {
    partidos: number;
    goles: number;
    asistencias: number;
    tarjetasAmarillas: number;
    tarjetasRojas: number;
  };
  biografia: string;
  logros: string[];
  valorMercado: string;
}

@Injectable({
  providedIn: 'root'
})
export class JugadoresDataService {

  private jugadores: Jugador[] = [
    {
      id: 1,
      nombre: 'Lionel',
      apellido: 'Messi',
      posicion: 'Delantero',
      dorsal: 10,
      nacionalidad: 'Argentina',
      edad: 36,
      equipo: 'Inter Miami',
      liga: 'MLS',
      imagen: 'https://via.placeholder.com/400x500/1a1a2e/eee?text=Lionel+Messi',
      estadisticas: {
        partidos: 850,
        goles: 720,
        asistencias: 350,
        tarjetasAmarillas: 90,
        tarjetasRojas: 3
      },
      biografia: 'Considerado uno de los mejores jugadores de todos los tiempos, Messi ha ganado múltiples Balones de Oro y llevó a Argentina a ganar la Copa del Mundo 2022.',
      logros: ['Copa del Mundo 2022', '7 Balones de Oro', '4 Champions League', 'Copa América 2021'],
      valorMercado: '€35M'
    },
    {
      id: 2,
      nombre: 'Kylian',
      apellido: 'Mbappé',
      posicion: 'Delantero',
      dorsal: 7,
      nacionalidad: 'Francia',
      edad: 25,
      equipo: 'Paris Saint-Germain',
      liga: 'Ligue 1',
      imagen: 'https://via.placeholder.com/400x500/0f4c75/eee?text=Kylian+Mbappe',
      estadisticas: {
        partidos: 320,
        goles: 255,
        asistencias: 120,
        tarjetasAmarillas: 40,
        tarjetasRojas: 2
      },
      biografia: 'Joven estrella francesa, campeón del mundo en 2018. Conocido por su velocidad excepcional y capacidad goleadora.',
      logros: ['Copa del Mundo 2018', 'Nations League 2021', '5 Ligue 1', 'Bota de Oro Mundial 2022'],
      valorMercado: '€180M'
    },
    {
      id: 3,
      nombre: 'Erling',
      apellido: 'Haaland',
      posicion: 'Delantero',
      dorsal: 9,
      nacionalidad: 'Noruega',
      edad: 23,
      equipo: 'Manchester City',
      liga: 'Premier League',
      imagen: 'https://via.placeholder.com/400x500/3282b8/eee?text=Erling+Haaland',
      estadisticas: {
        partidos: 180,
        goles: 170,
        asistencias: 35,
        tarjetasAmarillas: 25,
        tarjetasRojas: 0
      },
      biografia: 'Goleador noruego conocido por su físico imponente y eficacia frente al arco. Récord de goles en su primera temporada en Premier League.',
      logros: ['Champions League 2023', 'Premier League 2023', 'Bota de Oro Premier 2023', 'Triplete 2023'],
      valorMercado: '€170M'
    },
    {
      id: 4,
      nombre: 'Kevin',
      apellido: 'De Bruyne',
      posicion: 'Mediocampista',
      dorsal: 17,
      nacionalidad: 'Bélgica',
      edad: 32,
      equipo: 'Manchester City',
      liga: 'Premier League',
      imagen: 'https://via.placeholder.com/400x500/c3073f/eee?text=Kevin+De+Bruyne',
      estadisticas: {
        partidos: 380,
        goles: 95,
        asistencias: 165,
        tarjetasAmarillas: 55,
        tarjetasRojas: 1
      },
      biografia: 'Mediocampista creativo belga, considerado uno de los mejores en su posición. Maestro en asistencias y pases decisivos.',
      logros: ['Champions League 2023', '5 Premier League', '2 PFA Jugador del Año', 'Triplete 2023'],
      valorMercado: '€75M'
    }
  ];

  constructor() { }

  getJugadores(): Observable<Jugador[]> {
    return of(this.jugadores);
  }

  getJugadorPorId(id: number): Observable<Jugador | undefined> {
    const jugador = this.jugadores.find(j => j.id === id);
    return of(jugador);
  }

  getJugadoresPorPosicion(posicion: string): Observable<Jugador[]> {
    const jugadoresFiltrados = this.jugadores.filter(
      j => j.posicion.toLowerCase() === posicion.toLowerCase()
    );
    return of(jugadoresFiltrados);
  }

  buscarJugadores(termino: string): Observable<Jugador[]> {
    const terminoLower = termino.toLowerCase();
    const jugadoresFiltrados = this.jugadores.filter(j => 
      j.nombre.toLowerCase().includes(terminoLower) || 
      j.apellido.toLowerCase().includes(terminoLower)
    );
    return of(jugadoresFiltrados);
  }
}