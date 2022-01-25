import { TestBed } from '@angular/core/testing';

import { CentralisedPassingService } from './centralised-passing.service';

describe('CentralisedPassingService', () => {
  let service: CentralisedPassingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralisedPassingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
