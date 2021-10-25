import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaOpeningDetailsEntryComponent } from './npa-opening-details-entry.component';

describe('NpaOpeningDetailsEntryComponent', () => {
  let component: NpaOpeningDetailsEntryComponent;
  let fixture: ComponentFixture<NpaOpeningDetailsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpaOpeningDetailsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaOpeningDetailsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
