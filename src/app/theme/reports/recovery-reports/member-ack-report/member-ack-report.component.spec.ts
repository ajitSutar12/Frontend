import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAckReportComponent } from './member-ack-report.component';

describe('MemberAckReportComponent', () => {
  let component: MemberAckReportComponent;
  let fixture: ComponentFixture<MemberAckReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAckReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAckReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
