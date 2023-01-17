import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDisputeLoanComponent } from './master-dispute-loan.component';

describe('MasterDisputeLoanComponent', () => {
  let component: MasterDisputeLoanComponent;
  let fixture: ComponentFixture<MasterDisputeLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDisputeLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDisputeLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
