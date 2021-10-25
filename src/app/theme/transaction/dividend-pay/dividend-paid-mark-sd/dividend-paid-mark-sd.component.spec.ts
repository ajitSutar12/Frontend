import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendPaidMarkSDComponent } from './dividend-paid-mark-sd.component';

describe('DividendPaidMarkSDComponent', () => {
  let component: DividendPaidMarkSDComponent;
  let fixture: ComponentFixture<DividendPaidMarkSDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendPaidMarkSDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendPaidMarkSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
