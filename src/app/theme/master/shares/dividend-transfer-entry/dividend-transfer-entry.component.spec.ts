import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendTransferEntryComponent } from './dividend-transfer-entry.component';

describe('DividendTransferEntryComponent', () => {
  let component: DividendTransferEntryComponent;
  let fixture: ComponentFixture<DividendTransferEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendTransferEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendTransferEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
