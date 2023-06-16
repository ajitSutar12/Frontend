import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiwiseNpaRegComponent } from './citiwise-npa-reg.component';

describe('CitiwiseNpaRegComponent', () => {
  let component: CitiwiseNpaRegComponent;
  let fixture: ComponentFixture<CitiwiseNpaRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiwiseNpaRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiwiseNpaRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
