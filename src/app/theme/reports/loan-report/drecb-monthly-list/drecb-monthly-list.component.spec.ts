import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DRecbMonthlyListComponent } from './drecb-monthly-list.component';

describe('DRecbMonthlyListComponent', () => {
  let component: DRecbMonthlyListComponent;
  let fixture: ComponentFixture<DRecbMonthlyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DRecbMonthlyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DRecbMonthlyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
