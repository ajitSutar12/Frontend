import { TestBed } from '@angular/core/testing';

import { ProcessAcmService } from './process-acm.service';

describe('ProcessAcmService', () => {
  let service: ProcessAcmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessAcmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
