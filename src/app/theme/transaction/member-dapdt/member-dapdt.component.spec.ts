import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDAPDTComponent } from './member-dapdt.component';

describe('MemberDAPDTComponent', () => {
  let component: MemberDAPDTComponent;
  let fixture: ComponentFixture<MemberDAPDTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDAPDTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDAPDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
