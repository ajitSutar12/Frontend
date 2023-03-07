import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendPaidListComponent } from './dividend-paid-list.component';

describe('DividendPaidListComponent', () => {
  let component: DividendPaidListComponent;
  let fixture: ComponentFixture<DividendPaidListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendPaidListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendPaidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
