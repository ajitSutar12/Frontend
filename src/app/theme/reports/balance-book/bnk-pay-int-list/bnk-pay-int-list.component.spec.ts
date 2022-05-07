import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkPayIntListComponent } from './bnk-pay-int-list.component';

describe('BnkPayIntListComponent', () => {
  let component: BnkPayIntListComponent;
  let fixture: ComponentFixture<BnkPayIntListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkPayIntListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkPayIntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
