import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkMinorsListComponent } from './bnk-minors-list.component';

describe('BnkMinorsListComponent', () => {
  let component: BnkMinorsListComponent;
  let fixture: ComponentFixture<BnkMinorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkMinorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkMinorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
