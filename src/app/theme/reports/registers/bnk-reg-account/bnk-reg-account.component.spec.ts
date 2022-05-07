import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkRegAccountComponent } from './bnk-reg-account.component';

describe('BnkRegAccountComponent', () => {
  let component: BnkRegAccountComponent;
  let fixture: ComponentFixture<BnkRegAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkRegAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkRegAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
