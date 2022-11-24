import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkPigmyMaturedAclistComponent } from './bnk-pigmy-matured-aclist.component';

describe('BnkPigmyMaturedAclistComponent', () => {
  let component: BnkPigmyMaturedAclistComponent;
  let fixture: ComponentFixture<BnkPigmyMaturedAclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkPigmyMaturedAclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkPigmyMaturedAclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
