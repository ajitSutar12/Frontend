import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgsNeftPassingComponent } from './rtgs-neft-passing.component';

describe('RtgsNeftPassingComponent', () => {
  let component: RtgsNeftPassingComponent;
  let fixture: ComponentFixture<RtgsNeftPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtgsNeftPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtgsNeftPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
