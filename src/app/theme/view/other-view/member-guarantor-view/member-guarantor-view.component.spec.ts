import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberGuarantorViewComponent } from './member-guarantor-view.component';

describe('MemberGuarantorViewComponent', () => {
  let component: MemberGuarantorViewComponent;
  let fixture: ComponentFixture<MemberGuarantorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberGuarantorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberGuarantorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
