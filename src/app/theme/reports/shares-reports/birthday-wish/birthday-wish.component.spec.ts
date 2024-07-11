import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayWishComponent } from './birthday-wish.component';

describe('BirthdayWishComponent', () => {
  let component: BirthdayWishComponent;
  let fixture: ComponentFixture<BirthdayWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
