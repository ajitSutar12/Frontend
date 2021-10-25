import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendCalculationComponent } from './dividend-calculation.component';

describe('DividendCalculationComponent', () => {
  let component: DividendCalculationComponent;
  let fixture: ComponentFixture<DividendCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
