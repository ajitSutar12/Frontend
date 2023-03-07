import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidDividendListComponent } from './unpaid-dividend-list.component';

describe('UnpaidDividendListComponent', () => {
  let component: UnpaidDividendListComponent;
  let fixture: ComponentFixture<UnpaidDividendListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpaidDividendListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpaidDividendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
