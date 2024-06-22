import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueIncreaseDecreaseComponent } from './overdue-increase-decrease.component';

describe('OverdueIncreaseDecreaseComponent', () => {
  let component: OverdueIncreaseDecreaseComponent;
  let fixture: ComponentFixture<OverdueIncreaseDecreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueIncreaseDecreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueIncreaseDecreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
