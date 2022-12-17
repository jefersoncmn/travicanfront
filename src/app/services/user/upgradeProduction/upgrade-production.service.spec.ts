import { TestBed } from '@angular/core/testing';

import { UpgradeProductionService } from './upgrade-production.service';

describe('UpgradeProductionService', () => {
  let service: UpgradeProductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpgradeProductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
