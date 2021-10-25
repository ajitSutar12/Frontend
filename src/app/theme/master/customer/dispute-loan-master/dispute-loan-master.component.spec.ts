import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeLoanMasterComponent } from './dispute-loan-master.component';

describe('DisputeLoanMasterComponent', () => {
  let component: DisputeLoanMasterComponent;
  let fixture: ComponentFixture<DisputeLoanMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputeLoanMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeLoanMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
