import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkAcbalListComponent } from './bnk-acbal-list.component';

describe('BnkAcbalListComponent', () => {
  let component: BnkAcbalListComponent;
  let fixture: ComponentFixture<BnkAcbalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkAcbalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkAcbalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
