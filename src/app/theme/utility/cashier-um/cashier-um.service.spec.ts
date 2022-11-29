import { TestBed } from '@angular/core/testing';

import { CashierUmService } from './cashier-um.service';

describe('CashierUmService', () => {
  let service: CashierUmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashierUmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
