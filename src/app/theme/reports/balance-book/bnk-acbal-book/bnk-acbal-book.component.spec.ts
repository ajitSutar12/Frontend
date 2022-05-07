import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkACBalBookComponent } from './bnk-acbal-book.component';

describe('BnkACBalBookComponent', () => {
  let component: BnkACBalBookComponent;
  let fixture: ComponentFixture<BnkACBalBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkACBalBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkACBalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
