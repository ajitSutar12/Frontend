import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrrComponent } from './crr.component';

describe('CrrComponent', () => {
  let component: CrrComponent;
  let fixture: ComponentFixture<CrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
