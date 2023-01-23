import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionSlabMasterComponent } from './commission-slab-master.component';

describe('CommissionSlabMasterComponent', () => {
  let component: CommissionSlabMasterComponent;
  let fixture: ComponentFixture<CommissionSlabMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionSlabMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionSlabMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
