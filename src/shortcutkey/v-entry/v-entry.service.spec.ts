import { TestBed } from '@angular/core/testing';

import { VentryService } from './v-entry.service';

describe('VentryService', () => {
  let service: VentryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
