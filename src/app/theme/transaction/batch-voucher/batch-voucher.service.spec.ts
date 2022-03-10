import { TestBed } from '@angular/core/testing';

import { BatchVoucherService } from './batch-voucher.service';

describe('BatchVoucherService', () => {
  let service: BatchVoucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchVoucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
