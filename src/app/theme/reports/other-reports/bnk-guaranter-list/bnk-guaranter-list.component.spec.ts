import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGuaranterListComponent } from './bnk-guaranter-list.component';

describe('BnkGuaranterListComponent', () => {
  let component: BnkGuaranterListComponent;
  let fixture: ComponentFixture<BnkGuaranterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGuaranterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGuaranterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
