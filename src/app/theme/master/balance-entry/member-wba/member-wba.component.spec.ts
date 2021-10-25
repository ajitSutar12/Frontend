import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberWBAComponent } from './member-wba.component';

describe('MemberWBAComponent', () => {
  let component: MemberWBAComponent;
  let fixture: ComponentFixture<MemberWBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberWBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberWBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
