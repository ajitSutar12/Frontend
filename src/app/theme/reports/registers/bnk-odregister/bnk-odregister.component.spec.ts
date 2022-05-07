import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkODRegisterComponent } from './bnk-odregister.component';

describe('BnkODRegisterComponent', () => {
  let component: BnkODRegisterComponent;
  let fixture: ComponentFixture<BnkODRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkODRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkODRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
