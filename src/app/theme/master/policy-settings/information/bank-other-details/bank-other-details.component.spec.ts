import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOtherDetailsComponent } from './bank-other-details.component';

describe('BankOtherDetailsComponent', () => {
  let component: BankOtherDetailsComponent;
  let fixture: ComponentFixture<BankOtherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankOtherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOtherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
