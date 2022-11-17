import { TestBed } from '@angular/core/testing';

import { PigmyagentchangeService } from './pigmyagentchange.service';

describe('PigmyagentchangeService', () => {
  let service: PigmyagentchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PigmyagentchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
