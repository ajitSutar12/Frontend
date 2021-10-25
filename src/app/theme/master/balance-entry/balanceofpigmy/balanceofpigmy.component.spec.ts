import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceofpigmyComponent } from './balanceofpigmy.component';

describe('BalanceofpigmyComponent', () => {
  let component: BalanceofpigmyComponent;
  let fixture: ComponentFixture<BalanceofpigmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceofpigmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceofpigmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
