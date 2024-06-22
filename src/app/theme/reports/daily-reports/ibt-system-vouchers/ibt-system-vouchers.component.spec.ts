import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbtSystemVouchersComponent } from './ibt-system-vouchers.component';

describe('IbtSystemVouchersComponent', () => {
  let component: IbtSystemVouchersComponent;
  let fixture: ComponentFixture<IbtSystemVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbtSystemVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbtSystemVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
