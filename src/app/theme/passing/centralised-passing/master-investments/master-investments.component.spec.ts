import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterInvestmentsComponent } from './master-investments.component';

describe('MasterInvestmentsComponent', () => {
  let component: MasterInvestmentsComponent;
  let fixture: ComponentFixture<MasterInvestmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterInvestmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
