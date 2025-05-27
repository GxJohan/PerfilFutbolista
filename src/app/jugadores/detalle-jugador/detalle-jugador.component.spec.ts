import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJugadorComponent } from './detalle-jugador.component';

describe('DetalleJugadorComponent', () => {
  let component: DetalleJugadorComponent;
  let fixture: ComponentFixture<DetalleJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleJugadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
