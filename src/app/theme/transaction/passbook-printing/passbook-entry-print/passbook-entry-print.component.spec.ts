import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookEntryPrintComponent } from './passbook-entry-print.component';

describe('PassbookEntryPrintComponent', () => {
  let component: PassbookEntryPrintComponent;
  let fixture: ComponentFixture<PassbookEntryPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbookEntryPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbookEntryPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
