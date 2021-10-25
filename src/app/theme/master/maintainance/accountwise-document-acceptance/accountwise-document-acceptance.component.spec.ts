import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountwiseDocumentAcceptanceComponent } from './accountwise-document-acceptance.component';

describe('AccountwiseDocumentAcceptanceComponent', () => {
  let component: AccountwiseDocumentAcceptanceComponent;
  let fixture: ComponentFixture<AccountwiseDocumentAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountwiseDocumentAcceptanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountwiseDocumentAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
