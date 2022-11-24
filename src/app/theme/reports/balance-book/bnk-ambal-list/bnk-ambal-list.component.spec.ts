import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkAmbalListComponent } from './bnk-ambal-list.component';

describe('BnkAmbalListComponent', () => {
  let component: BnkAmbalListComponent;
  let fixture: ComponentFixture<BnkAmbalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkAmbalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkAmbalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
