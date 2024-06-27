import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanknoticeComponent } from './blanknotice.component';

describe('BlanknoticeComponent', () => {
  let component: BlanknoticeComponent;
  let fixture: ComponentFixture<BlanknoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlanknoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanknoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
