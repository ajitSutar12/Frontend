import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntratewiseBalancelistComponent } from './intratewise-balancelist.component';

describe('IntratewiseBalancelistComponent', () => {
  let component: IntratewiseBalancelistComponent;
  let fixture: ComponentFixture<IntratewiseBalancelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntratewiseBalancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntratewiseBalancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
