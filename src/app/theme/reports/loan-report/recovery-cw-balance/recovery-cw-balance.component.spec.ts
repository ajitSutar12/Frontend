import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryCwBalanceComponent } from './recovery-cw-balance.component';

describe('RecoveryCwBalanceComponent', () => {
  let component: RecoveryCwBalanceComponent;
  let fixture: ComponentFixture<RecoveryCwBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryCwBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryCwBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
