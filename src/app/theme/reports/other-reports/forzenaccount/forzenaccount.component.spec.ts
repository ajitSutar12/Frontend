import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForzenaccountComponent } from './forzenaccount.component';

describe('ForzenaccountComponent', () => {
  let component: ForzenaccountComponent;
  let fixture: ComponentFixture<ForzenaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForzenaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForzenaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
