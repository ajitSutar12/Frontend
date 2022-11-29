import { TestBed } from '@angular/core/testing';

import { CashDenominationService } from './cash-denomination.service';

describe('CashDenominationService', () => {
  let service: CashDenominationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashDenominationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
