import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdReciptPrintingComponent } from './td-recipt-printing.component';

describe('TdReciptPrintingComponent', () => {
  let component: TdReciptPrintingComponent;
  let fixture: ComponentFixture<TdReciptPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdReciptPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdReciptPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
