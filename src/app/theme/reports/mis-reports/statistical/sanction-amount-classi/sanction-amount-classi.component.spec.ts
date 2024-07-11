import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionAmountClassiComponent } from './sanction-amount-classi.component';

describe('SanctionAmountClassiComponent', () => {
  let component: SanctionAmountClassiComponent;
  let fixture: ComponentFixture<SanctionAmountClassiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionAmountClassiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionAmountClassiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
