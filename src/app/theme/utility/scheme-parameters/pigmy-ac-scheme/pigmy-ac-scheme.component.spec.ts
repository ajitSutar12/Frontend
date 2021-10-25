import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyAcSchemeComponent } from './pigmy-ac-scheme.component';

describe('PigmyAcSchemeComponent', () => {
  let component: PigmyAcSchemeComponent;
  let fixture: ComponentFixture<PigmyAcSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyAcSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyAcSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
