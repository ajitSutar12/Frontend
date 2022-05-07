import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkIVOpenAndCloseRegComponent } from './bnk-ivopen-and-close-reg.component';

describe('BnkIVOpenAndCloseRegComponent', () => {
  let component: BnkIVOpenAndCloseRegComponent;
  let fixture: ComponentFixture<BnkIVOpenAndCloseRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkIVOpenAndCloseRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkIVOpenAndCloseRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
