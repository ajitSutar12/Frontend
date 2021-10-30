import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskCatagoryComponent } from './risk-catagory.component';

describe('RiskCatagoryComponent', () => {
  let component: RiskCatagoryComponent;
  let fixture: ComponentFixture<RiskCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
