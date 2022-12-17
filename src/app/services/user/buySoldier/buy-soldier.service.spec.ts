import { TestBed } from '@angular/core/testing';

import { BuySoldierService } from './buy-soldier.service';

describe('BuySoldierService', () => {
  let service: BuySoldierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuySoldierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
