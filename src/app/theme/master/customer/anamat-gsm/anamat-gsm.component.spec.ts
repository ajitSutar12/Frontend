import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamatGSMComponent } from './anamat-gsm.component';

describe('AnamatGSMComponent', () => {
  let component: AnamatGSMComponent;
  let fixture: ComponentFixture<AnamatGSMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnamatGSMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamatGSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
