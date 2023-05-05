import { TestBed } from '@angular/core/testing';

import { CdPassingService } from './cd-passing.service';

describe('CdPassingService', () => {
  let service: CdPassingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdPassingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
