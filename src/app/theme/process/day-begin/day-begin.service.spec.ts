import { TestBed } from '@angular/core/testing';

import { DayBeginService } from './day-begin.service';

describe('DayBeginService', () => {
  let service: DayBeginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayBeginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
