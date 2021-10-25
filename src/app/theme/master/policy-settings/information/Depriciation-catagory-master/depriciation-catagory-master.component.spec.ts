import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepriciationCatagoryMasterComponent } from './depriciation-catagory-master.component';

describe('DepriciationCatagoryMasterComponent', () => {
  let component: DepriciationCatagoryMasterComponent;
  let fixture: ComponentFixture<DepriciationCatagoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepriciationCatagoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepriciationCatagoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
