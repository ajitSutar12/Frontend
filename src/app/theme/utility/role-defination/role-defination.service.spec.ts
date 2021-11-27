import { TestBed } from '@angular/core/testing';

import { RoleDefinationService } from './role-defination.service';

describe('RoleDefinationService', () => {
  let service: RoleDefinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleDefinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
