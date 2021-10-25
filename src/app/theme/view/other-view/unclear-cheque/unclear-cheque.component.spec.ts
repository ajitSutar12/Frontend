import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnclearChequeComponent } from './unclear-cheque.component';

describe('UnclearChequeComponent', () => {
  let component: UnclearChequeComponent;
  let fixture: ComponentFixture<UnclearChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnclearChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnclearChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
