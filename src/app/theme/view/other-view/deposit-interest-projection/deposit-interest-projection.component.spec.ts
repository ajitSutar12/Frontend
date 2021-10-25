import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositInterestProjectionComponent } from './deposit-interest-projection.component';

describe('DepositInterestProjectionComponent', () => {
  let component: DepositInterestProjectionComponent;
  let fixture: ComponentFixture<DepositInterestProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositInterestProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositInterestProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
