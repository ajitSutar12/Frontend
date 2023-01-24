import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDepositsComponent } from './master-deposits.component';

describe('MasterDepositsComponent', () => {
  let component: MasterDepositsComponent;
  let fixture: ComponentFixture<MasterDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
