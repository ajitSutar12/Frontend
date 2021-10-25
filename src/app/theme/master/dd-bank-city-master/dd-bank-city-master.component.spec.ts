import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DDBankCityMasterComponent } from './dd-bank-city-master.component';

describe('DDBankCityMasterComponent', () => {
  let component: DDBankCityMasterComponent;
  let fixture: ComponentFixture<DDBankCityMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DDBankCityMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DDBankCityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
