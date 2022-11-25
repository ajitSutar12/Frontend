import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntratewiseMaturityListComponent } from './intratewise-maturity-list.component';

describe('IntratewiseMaturityListComponent', () => {
  let component: IntratewiseMaturityListComponent;
  let fixture: ComponentFixture<IntratewiseMaturityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntratewiseMaturityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntratewiseMaturityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
