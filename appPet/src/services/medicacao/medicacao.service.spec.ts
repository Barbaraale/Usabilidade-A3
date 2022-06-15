import { TestBed } from '@angular/core/testing';

import { MedicacaoService } from './medicacao.service';

describe('MedicacaoService', () => {
  let service: MedicacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
