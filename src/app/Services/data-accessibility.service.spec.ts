import { TestBed } from '@angular/core/testing';

import { DataAccessibilityService } from './data-accessibility.service';

describe('DataAccessibilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAccessibilityService = TestBed.get(DataAccessibilityService);
    expect(service).toBeTruthy();
  });
});
