import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendPayComponent } from './dividend-pay.component';

describe('DividendPayComponent', () => {
  let component: DividendPayComponent;
  let fixture: ComponentFixture<DividendPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
