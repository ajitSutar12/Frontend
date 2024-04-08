import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyDayEndComponent } from './pigmy-day-end.component';

describe('PigmyDayEndComponent', () => {
  let component: PigmyDayEndComponent;
  let fixture: ComponentFixture<PigmyDayEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyDayEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyDayEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
