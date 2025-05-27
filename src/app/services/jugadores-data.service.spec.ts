import { TestBed } from '@angular/core/testing';

import { JugadoresDataService } from './jugadores-data.service';

describe('JugadoresDataService', () => {
  let service: JugadoresDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
