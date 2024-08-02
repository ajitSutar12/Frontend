import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberIncreaseDecreaseComponent } from './member-increase-decrease.component';

describe('MemberIncreaseDecreaseComponent', () => {
  let component: MemberIncreaseDecreaseComponent;
  let fixture: ComponentFixture<MemberIncreaseDecreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberIncreaseDecreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberIncreaseDecreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
