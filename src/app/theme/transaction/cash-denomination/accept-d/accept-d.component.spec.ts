import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDComponent } from './accept-d.component';

describe('AcceptDComponent', () => {
  let component: AcceptDComponent;
  let fixture: ComponentFixture<AcceptDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
