import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciationRateMasterComponent } from './depreciation-rate-master.component';

describe('DepreciationRateMasterComponent', () => {
  let component: DepreciationRateMasterComponent;
  let fixture: ComponentFixture<DepreciationRateMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepreciationRateMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepreciationRateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
