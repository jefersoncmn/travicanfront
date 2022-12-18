import { TestBed } from '@angular/core/testing';

import { GetLandsPositionsService } from './get-lands-positions.service';

describe('GetLandsPositionsService', () => {
  let service: GetLandsPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLandsPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
