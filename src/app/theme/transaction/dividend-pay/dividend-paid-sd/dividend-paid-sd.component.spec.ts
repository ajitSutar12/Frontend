import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendPaidSDComponent } from './dividend-paid-sd.component';

describe('DividendPaidSDComponent', () => {
  let component: DividendPaidSDComponent;
  let fixture: ComponentFixture<DividendPaidSDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendPaidSDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendPaidSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
