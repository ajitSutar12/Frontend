import { TestBed } from '@angular/core/testing';

import { BvoucherService } from './b-voucher.service';

describe('BvoucherService', () => {
  let service: BvoucherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BvoucherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
