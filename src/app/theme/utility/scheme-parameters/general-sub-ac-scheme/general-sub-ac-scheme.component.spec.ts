import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSubAcSchemeComponent } from './general-sub-ac-scheme.component';

describe('GeneralSubAcSchemeComponent', () => {
  let component: GeneralSubAcSchemeComponent;
  let fixture: ComponentFixture<GeneralSubAcSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSubAcSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSubAcSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
