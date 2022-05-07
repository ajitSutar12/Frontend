import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkRegInsurenceComponent } from './bnk-reg-insurence.component';

describe('BnkRegInsurenceComponent', () => {
  let component: BnkRegInsurenceComponent;
  let fixture: ComponentFixture<BnkRegInsurenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkRegInsurenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkRegInsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
