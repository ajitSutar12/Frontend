import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsPigmyAccountClosingComponent } from './savings-pigmy-account-closing.component';

describe('SavingsPigmyAccountClosingComponent', () => {
  let component: SavingsPigmyAccountClosingComponent;
  let fixture: ComponentFixture<SavingsPigmyAccountClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsPigmyAccountClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsPigmyAccountClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
