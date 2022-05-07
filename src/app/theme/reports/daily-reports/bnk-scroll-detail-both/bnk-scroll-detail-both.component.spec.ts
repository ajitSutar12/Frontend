import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkScrollDetailBothComponent } from './bnk-scroll-detail-both.component';

describe('BnkScrollDetailBothComponent', () => {
  let component: BnkScrollDetailBothComponent;
  let fixture: ComponentFixture<BnkScrollDetailBothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkScrollDetailBothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkScrollDetailBothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
