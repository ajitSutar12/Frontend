import { TestBed } from '@angular/core/testing';

import { VoucherEntryService } from './voucher-entry.service';

describe('VoucherEntryService', () => {
  let service: VoucherEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
