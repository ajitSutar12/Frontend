import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdRelativeProformComponent } from './dd-relative-proform.component';

describe('DdRelativeProformComponent', () => {
  let component: DdRelativeProformComponent;
  let fixture: ComponentFixture<DdRelativeProformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdRelativeProformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdRelativeProformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
