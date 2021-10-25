import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizewiseBalanceModificationComponent } from './sizewise-balance-modification.component';

describe('SizewiseBalanceModificationComponent', () => {
  let component: SizewiseBalanceModificationComponent;
  let fixture: ComponentFixture<SizewiseBalanceModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizewiseBalanceModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizewiseBalanceModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
