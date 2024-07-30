import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCashComponent } from './exchange-cash.component';

describe('ExchangeCashComponent', () => {
  let component: ExchangeCashComponent;
  let fixture: ComponentFixture<ExchangeCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
