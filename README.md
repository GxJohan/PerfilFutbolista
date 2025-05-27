# PerfilFutbolista ⚽

Una aplicación web desarrollada con **Angular 19** que muestra perfiles detallados de jugadores de fútbol. Este proyecto utiliza **componentes standalone** y arquitectura moderna de Angular sin módulos NgModule.

## 🌟 Características

- **Angular 19** con componentes standalone
- **Lazy Loading** para optimización de rendimiento
- **Bootstrap 5** para diseño responsivo
- **RxJS** para manejo de datos reactivos
- **TypeScript** para tipado estático
- Filtros y búsqueda de jugadores
- Perfiles detallados con estadísticas
- Navegación fluida entre componentes

## 🏗️ Arquitectura del Proyecto

### Componentes Standalone
- **AppComponent**: Componente raíz con navegación
- **InicioComponent**: Página de bienvenida
- **ListaJugadoresComponent**: Lista de jugadores con filtros
- **DetalleJugadorComponent**: Perfil completo del jugador

### Enrutamiento
```
/ → InicioComponent
/jugadores → ListaJugadoresComponent
/jugadores/detalle/:id → DetalleJugadorComponent
```

### Servicios
- **JugadoresDataService**: Gestión de datos de jugadores con RxJS Observables

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- Angular CLI instalado globalmente: `npm install -g @angular/cli`

### Configuración del Proyecto
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd PerfilFutbolista

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`

## 📜 Comandos Disponibles

```bash
# Servidor de desarrollo
ng serve

# Construcción para producción
ng build

# Construcción con observación de cambios
ng build --watch --configuration development

# Ejecutar pruebas unitarias
ng test

# Generar componentes standalone
ng generate component nombre-componente --standalone

# Generar servicios
ng generate service nombre-servicio
```

## 🎯 Funcionalidades Implementadas

### Página de Inicio
- Presentación atractiva de la aplicación
- Navegación directa a la lista de jugadores
- Información sobre características de la app

### Lista de Jugadores
- Visualización en tarjetas responsivas
- Filtro por posición (Delantero, Mediocampista, etc.)
- Búsqueda por nombre, apellido o equipo
- Estadísticas resumidas (goles, asistencias, partidos)

### Detalle de Jugador
- Perfil completo con fotografía
- Información personal (nacionalidad, edad, club)
- Estadísticas detalladas de carrera
- Logros y títulos obtenidos
- Barras de progreso para promedios
- Navegación de regreso

## 🛠️ Tecnologías Utilizadas

- **Angular 19.2.13**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Bootstrap 5.3.3**: Framework CSS
- **Bootstrap Icons**: Iconografía
- **RxJS**: Programación reactiva
- **Angular Router**: Navegación

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── inicio/                    # Componente de inicio
│   ├── jugadores/
│   │   ├── lista-jugadores/       # Lista de jugadores
│   │   ├── detalle-jugador/       # Detalle del jugador
│   │   └── jugadores.routes.ts    # Rutas de jugadores
│   ├── services/
│   │   └── jugadores-data.service.ts # Servicio de datos
│   ├── app.component.*            # Componente principal
│   ├── app.routes.ts              # Configuración de rutas
│   └── app.config.ts              # Configuración de la app
├── index.html                     # Página principal
└── styles.css                     # Estilos globales
```

## 🎓 Objetivos Académicos

Este proyecto ha sido desarrollado como material educativo para el curso **JavaScript Avanzado** y demuestra:

- Implementación de arquitectura moderna con Angular 19
- Uso de componentes standalone sin módulos NgModule
- Lazy loading para optimización de rendimiento
- Manejo de rutas y parámetros
- Consumo de servicios con RxJS Observables
- Diseño responsivo con Bootstrap
- Buenas prácticas de desarrollo en Angular

## 📚 Conceptos Angular Aplicados

- **Standalone Components**: Componentes independientes sin módulos
- **Lazy Loading**: Carga perezosa de rutas
- **Dependency Injection**: Inyección de dependencias
- **Reactive Programming**: Programación reactiva con RxJS
- **Route Parameters**: Parámetros de ruta
- **Component Communication**: Comunicación entre componentes
- **TypeScript Integration**: Integración con TypeScript

## 🤝 Contribuciones

Este proyecto es parte del material académico del curso JavaScript Avanzado. Los estudiantes pueden:

1. Fork del proyecto
2. Implementar mejoras o nuevas funcionalidades
3. Crear pull requests con documentación detallada

### Ideas para Extensiones

- Sistema de favoritos con LocalStorage
- Comparador de jugadores
- Estadísticas avanzadas
- Integración con APIs reales
- Autenticación de usuarios
- Sistema de comentarios

## 📞 Contacto

**Ms. Johan López Heredia**  
Docente - JavaScript Avanzado  
Universidad Tecnológica del Perú

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para fines educativos**
