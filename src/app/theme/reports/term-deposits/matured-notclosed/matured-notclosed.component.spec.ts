import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturedNotclosedComponent } from './matured-notclosed.component';

describe('MaturedNotclosedComponent', () => {
  let component: MaturedNotclosedComponent;
  let fixture: ComponentFixture<MaturedNotclosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaturedNotclosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturedNotclosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
