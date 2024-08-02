import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrutunjayRegisterComponent } from './mrutunjay-register.component';

describe('MrutunjayRegisterComponent', () => {
  let component: MrutunjayRegisterComponent;
  let fixture: ComponentFixture<MrutunjayRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrutunjayRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrutunjayRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
