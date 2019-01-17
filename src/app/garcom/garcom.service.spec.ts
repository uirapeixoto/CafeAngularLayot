import { TestBed } from '@angular/core/testing';

import { GarcomService } from './garcom.service';

describe('GarcomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GarcomService = TestBed.get(GarcomService);
    expect(service).toBeTruthy();
  });
});
