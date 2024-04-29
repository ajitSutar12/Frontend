import { TestBed } from '@angular/core/testing';

import { RecoveryProcessingService } from './recovery-processing.service';

describe('RecoveryProcessingService', () => {
  let service: RecoveryProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveryProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
