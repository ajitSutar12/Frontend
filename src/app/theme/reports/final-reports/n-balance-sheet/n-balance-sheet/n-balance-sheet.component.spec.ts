import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBalanceSheetComponent } from './n-balance-sheet.component';

describe('NBalanceSheetComponent', () => {
  let component: NBalanceSheetComponent;
  let fixture: ComponentFixture<NBalanceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBalanceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
