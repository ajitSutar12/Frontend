import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NProfitLossComponent } from './n-profit-loss.component';

describe('NProfitLossComponent', () => {
  let component: NProfitLossComponent;
  let fixture: ComponentFixture<NProfitLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NProfitLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NProfitLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
