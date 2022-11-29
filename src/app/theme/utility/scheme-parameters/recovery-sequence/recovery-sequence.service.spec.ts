import { TestBed } from '@angular/core/testing';

import { RecoverySequenceService } from './recovery-sequence.service';

describe('RecoverySequenceService', () => {
  let service: RecoverySequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverySequenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
