import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecePayRepDetailsComponent } from './rece-pay-rep-details.component';

describe('RecePayRepDetailsComponent', () => {
  let component: RecePayRepDetailsComponent;
  let fixture: ComponentFixture<RecePayRepDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecePayRepDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecePayRepDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
