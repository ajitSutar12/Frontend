import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesBalanceAdditionComponent } from './shares-balance-addition.component';

describe('SharesBalanceAdditionComponent', () => {
  let component: SharesBalanceAdditionComponent;
  let fixture: ComponentFixture<SharesBalanceAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesBalanceAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesBalanceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
