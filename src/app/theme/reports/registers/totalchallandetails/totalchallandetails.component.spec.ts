import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalchallandetailsComponent } from './totalchallandetails.component';

describe('TotalchallandetailsComponent', () => {
  let component: TotalchallandetailsComponent;
  let fixture: ComponentFixture<TotalchallandetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalchallandetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalchallandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
