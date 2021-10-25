import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeBookDetailsComponent } from './cheque-book-details.component';

describe('ChequeBookDetailsComponent', () => {
  let component: ChequeBookDetailsComponent;
  let fixture: ComponentFixture<ChequeBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
