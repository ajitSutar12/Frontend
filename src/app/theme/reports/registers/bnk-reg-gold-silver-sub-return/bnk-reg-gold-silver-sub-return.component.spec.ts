import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkRegGoldSilverSubReturnComponent } from './bnk-reg-gold-silver-sub-return.component';

describe('BnkRegGoldSilverSubReturnComponent', () => {
  let component: BnkRegGoldSilverSubReturnComponent;
  let fixture: ComponentFixture<BnkRegGoldSilverSubReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkRegGoldSilverSubReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkRegGoldSilverSubReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
