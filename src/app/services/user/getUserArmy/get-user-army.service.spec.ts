import { TestBed } from '@angular/core/testing';

import { GetUserArmyService } from './get-user-army.service';

describe('GetUserArmyService', () => {
  let service: GetUserArmyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserArmyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
