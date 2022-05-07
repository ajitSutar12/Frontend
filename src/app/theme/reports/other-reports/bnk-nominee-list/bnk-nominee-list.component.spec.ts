import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkNomineeListComponent } from './bnk-nominee-list.component';

describe('BnkNomineeListComponent', () => {
  let component: BnkNomineeListComponent;
  let fixture: ComponentFixture<BnkNomineeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkNomineeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkNomineeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
