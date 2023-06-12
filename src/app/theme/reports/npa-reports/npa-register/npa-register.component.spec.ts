import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaRegisterComponent } from './npa-register.component';

describe('NpaRegisterComponent', () => {
  let component: NpaRegisterComponent;
  let fixture: ComponentFixture<NpaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
