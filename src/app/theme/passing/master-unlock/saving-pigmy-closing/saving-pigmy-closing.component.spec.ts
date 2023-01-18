import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingPigmyClosingComponent } from './saving-pigmy-closing.component';

describe('SavingPigmyClosingComponent', () => {
  let component: SavingPigmyClosingComponent;
  let fixture: ComponentFixture<SavingPigmyClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingPigmyClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingPigmyClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
