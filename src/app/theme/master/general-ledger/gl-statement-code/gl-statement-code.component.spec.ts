import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlStatementCodeComponent } from './gl-statement-code.component';

describe('GlStatementCodeComponent', () => {
  let component: GlStatementCodeComponent;
  let fixture: ComponentFixture<GlStatementCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlStatementCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlStatementCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
