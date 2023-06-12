import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaRegPercentageComponent } from './npa-reg-percentage.component';

describe('NpaRegPercentageComponent', () => {
  let component: NpaRegPercentageComponent;
  let fixture: ComponentFixture<NpaRegPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpaRegPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaRegPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
