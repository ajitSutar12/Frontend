import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkLNAmountMovementDetailComponent } from './bnk-lnamount-movement-detail.component';

describe('BnkLNAmountMovementDetailComponent', () => {
  let component: BnkLNAmountMovementDetailComponent;
  let fixture: ComponentFixture<BnkLNAmountMovementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkLNAmountMovementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkLNAmountMovementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
