import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDReceiptTypeMasterComponent } from './t-dreceipt-type-master.component';

describe('TDReceiptTypeMasterComponent', () => {
  let component: TDReceiptTypeMasterComponent;
  let fixture: ComponentFixture<TDReceiptTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDReceiptTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDReceiptTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
