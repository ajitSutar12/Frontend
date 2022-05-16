import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkTrialBaldetailComponent } from './bnk-trial-baldetail.component';

describe('BnkTrialBaldetailComponent', () => {
  let component: BnkTrialBaldetailComponent;
  let fixture: ComponentFixture<BnkTrialBaldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkTrialBaldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkTrialBaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
