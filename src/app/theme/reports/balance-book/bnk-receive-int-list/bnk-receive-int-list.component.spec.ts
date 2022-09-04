import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkReceiveIntListComponent } from './bnk-receive-int-list.component';

describe('BnkReceiveIntListComponent', () => {
  let component: BnkReceiveIntListComponent;
  let fixture: ComponentFixture<BnkReceiveIntListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkReceiveIntListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkReceiveIntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
