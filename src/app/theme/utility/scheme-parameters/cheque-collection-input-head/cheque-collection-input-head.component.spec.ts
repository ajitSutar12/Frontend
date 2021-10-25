import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeCollectionInputHeadComponent } from './cheque-collection-input-head.component';

describe('ChequeCollectionInputHeadComponent', () => {
  let component: ChequeCollectionInputHeadComponent;
  let fixture: ComponentFixture<ChequeCollectionInputHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeCollectionInputHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeCollectionInputHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
