import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaclassificationSecuredUnsecurdComponent } from './npaclassification-secured-unsecurd.component';

describe('NpaclassificationSecuredUnsecurdComponent', () => {
  let component: NpaclassificationSecuredUnsecurdComponent;
  let fixture: ComponentFixture<NpaclassificationSecuredUnsecurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpaclassificationSecuredUnsecurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaclassificationSecuredUnsecurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
