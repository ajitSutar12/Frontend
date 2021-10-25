import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockersSchemeComponent } from './lockers-scheme.component';

describe('LockersSchemeComponent', () => {
  let component: LockersSchemeComponent;
  let fixture: ComponentFixture<LockersSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockersSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockersSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
