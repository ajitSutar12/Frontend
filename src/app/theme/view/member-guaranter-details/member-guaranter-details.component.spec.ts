import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberGuaranterDetailsComponent } from './member-guaranter-details.component';

describe('MemberGuaranterDetailsComponent', () => {
  let component: MemberGuaranterDetailsComponent;
  let fixture: ComponentFixture<MemberGuaranterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberGuaranterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberGuaranterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
