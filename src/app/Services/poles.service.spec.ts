import { TestBed } from '@angular/core/testing';

import { PolesService } from './poles.service';

describe('PolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolesService = TestBed.get(PolesService);
    expect(service).toBeTruthy();
  });
});
