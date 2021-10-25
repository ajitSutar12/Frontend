import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlAccountsMasterComponent } from './gl-accounts-master.component';

describe('GlAccountsMasterComponent', () => {
  let component: GlAccountsMasterComponent;
  let fixture: ComponentFixture<GlAccountsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlAccountsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlAccountsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
