import { TestBed } from '@angular/core/testing';

import { BudgetViewService } from './budget-view.service';

describe('BudgetViewService', () => {
  let service: BudgetViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
