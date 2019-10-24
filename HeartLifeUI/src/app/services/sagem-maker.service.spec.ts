import { TestBed } from '@angular/core/testing';

import { SagemMakerService } from './sagem-maker.service';

describe('SagemMakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SagemMakerService = TestBed.get(SagemMakerService);
    expect(service).toBeTruthy();
  });
});
