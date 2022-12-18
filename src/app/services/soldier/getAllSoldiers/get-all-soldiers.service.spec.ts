import { TestBed } from '@angular/core/testing';

import { GetAllSoldiersService } from './get-all-soldiers.service';

describe('GetAllSoldiersService', () => {
  let service: GetAllSoldiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllSoldiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
