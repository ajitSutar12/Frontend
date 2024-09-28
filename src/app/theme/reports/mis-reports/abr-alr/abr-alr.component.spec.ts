import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrAlrComponent } from './abr-alr.component';

describe('AbrAlrComponent', () => {
  let component: AbrAlrComponent;
  let fixture: ComponentFixture<AbrAlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrAlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrAlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
