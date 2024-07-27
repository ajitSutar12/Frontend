import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberanddividendreportsComponent } from './memberanddividendreports.component';

describe('MemberanddividendreportsComponent', () => {
  let component: MemberanddividendreportsComponent;
  let fixture: ComponentFixture<MemberanddividendreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberanddividendreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberanddividendreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
