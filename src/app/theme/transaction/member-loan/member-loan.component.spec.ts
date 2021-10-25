import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLoanComponent } from './member-loan.component';

describe('MemberLoanComponent', () => {
  let component: MemberLoanComponent;
  let fixture: ComponentFixture<MemberLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
