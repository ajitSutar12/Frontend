import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkDepAmountMovementDetailComponent } from './bnk-dep-amount-movement-detail.component';

describe('BnkDepAmountMovementDetailComponent', () => {
  let component: BnkDepAmountMovementDetailComponent;
  let fixture: ComponentFixture<BnkDepAmountMovementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkDepAmountMovementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkDepAmountMovementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
