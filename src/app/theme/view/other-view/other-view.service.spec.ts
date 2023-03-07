import { TestBed } from '@angular/core/testing';

import { OtherViewService } from './other-view.service';

describe('OtherViewService', () => {
  let service: OtherViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
