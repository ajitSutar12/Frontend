import { TestBed } from '@angular/core/testing';

import { DayEndService } from './day-end.service';

describe('DayEndService', () => {
  let service: DayEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
