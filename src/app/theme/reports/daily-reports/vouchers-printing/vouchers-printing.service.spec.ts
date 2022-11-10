import { TestBed } from '@angular/core/testing';

import { VouchersPrintingService } from './vouchers-printing.service';

describe('VouchersPrintingService', () => {
  let service: VouchersPrintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VouchersPrintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
