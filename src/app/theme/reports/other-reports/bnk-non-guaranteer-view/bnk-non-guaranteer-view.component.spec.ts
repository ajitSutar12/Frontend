import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkNonGuaranteerViewComponent } from './bnk-non-guaranteer-view.component';

describe('BnkNonGuaranteerViewComponent', () => {
  let component: BnkNonGuaranteerViewComponent;
  let fixture: ComponentFixture<BnkNonGuaranteerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkNonGuaranteerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkNonGuaranteerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
