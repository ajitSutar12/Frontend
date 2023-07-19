import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgBwiseBtypeMemberComponent } from './ledg-bwise-btype-member.component';

describe('LedgBwiseBtypeMemberComponent', () => {
  let component: LedgBwiseBtypeMemberComponent;
  let fixture: ComponentFixture<LedgBwiseBtypeMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgBwiseBtypeMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgBwiseBtypeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
