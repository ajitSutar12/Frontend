import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDebtsComponent } from './book-debts.component';

describe('BookDebtsComponent', () => {
  let component: BookDebtsComponent;
  let fixture: ComponentFixture<BookDebtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDebtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDebtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
