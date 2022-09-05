import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkExpectIntInstructComponent } from './bnk-expect-int-instruct.component';

describe('BnkExpectIntInstructComponent', () => {
  let component: BnkExpectIntInstructComponent;
  let fixture: ComponentFixture<BnkExpectIntInstructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkExpectIntInstructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkExpectIntInstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
