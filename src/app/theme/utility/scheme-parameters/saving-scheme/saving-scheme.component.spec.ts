import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingSchemeComponent } from './saving-scheme.component';

describe('SavingSchemeComponent', () => {
  let component: SavingSchemeComponent;
  let fixture: ComponentFixture<SavingSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
