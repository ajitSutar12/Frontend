import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovalComponent } from './unapproval.component';

describe('UnapprovalComponent', () => {
  let component: UnapprovalComponent;
  let fixture: ComponentFixture<UnapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
