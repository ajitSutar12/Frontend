import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgBwiseDlDetailsComponent } from './ledg-bwise-dl-details.component';

describe('LedgBwiseDlDetailsComponent', () => {
  let component: LedgBwiseDlDetailsComponent;
  let fixture: ComponentFixture<LedgBwiseDlDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgBwiseDlDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgBwiseDlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
