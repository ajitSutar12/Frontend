import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceUpdationComponent } from './balance-updation.component';

describe('BalanceUpdationComponent', () => {
  let component: BalanceUpdationComponent;
  let fixture: ComponentFixture<BalanceUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
