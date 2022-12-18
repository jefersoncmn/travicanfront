import { TestBed } from '@angular/core/testing';

import { GetProductionsService } from './get-productions.service';

describe('GetProductionsService', () => {
  let service: GetProductionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
