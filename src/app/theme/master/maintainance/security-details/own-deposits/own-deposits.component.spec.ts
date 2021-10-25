import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnDepositsComponent } from './own-deposits.component';

describe('OwnDepositsComponent', () => {
  let component: OwnDepositsComponent;
  let fixture: ComponentFixture<OwnDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
