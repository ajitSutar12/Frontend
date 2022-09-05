import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkTrialBalComponent } from './bnk-trial-bal.component';

describe('BnkTrialBalComponent', () => {
  let component: BnkTrialBalComponent;
  let fixture: ComponentFixture<BnkTrialBalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkTrialBalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkTrialBalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
