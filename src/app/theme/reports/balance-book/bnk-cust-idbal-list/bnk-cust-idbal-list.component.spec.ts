import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkCustIDBalListComponent } from './bnk-cust-idbal-list.component';

describe('BnkCustIDBalListComponent', () => {
  let component: BnkCustIDBalListComponent;
  let fixture: ComponentFixture<BnkCustIDBalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkCustIDBalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkCustIDBalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
