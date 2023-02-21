import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalDepositListComponent } from './renewal-deposit-list.component';

describe('RenewalDepositListComponent', () => {
  let component: RenewalDepositListComponent;
  let fixture: ComponentFixture<RenewalDepositListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalDepositListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewalDepositListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
