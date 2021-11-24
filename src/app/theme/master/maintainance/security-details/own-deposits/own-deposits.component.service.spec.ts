import { TestBed } from '@angular/core/testing';

import { OwnDeposits.ComponentService } from './own-deposits.component.service';

describe('OwnDeposits.ComponentService', () => {
  let service: OwnDeposits.ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnDeposits.ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
