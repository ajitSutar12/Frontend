import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkOtherBalListComponent } from './bnk-other-bal-list.component';

describe('BnkOtherBalListComponent', () => {
  let component: BnkOtherBalListComponent;
  let fixture: ComponentFixture<BnkOtherBalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkOtherBalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkOtherBalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
