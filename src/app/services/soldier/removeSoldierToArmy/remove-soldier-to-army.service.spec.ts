import { TestBed } from '@angular/core/testing';

import { RemoveSoldierToArmyService } from './remove-soldier-to-army.service';

describe('RemoveSoldierToArmyService', () => {
  let service: RemoveSoldierToArmyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveSoldierToArmyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
