import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSharesComponent } from './market-shares.component';

describe('MarketSharesComponent', () => {
  let component: MarketSharesComponent;
  let fixture: ComponentFixture<MarketSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
