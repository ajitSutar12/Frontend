import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaReportsComponent } from './npa-reports.component';

describe('NpaReportsComponent', () => {
  let component: NpaReportsComponent;
  let fixture: ComponentFixture<NpaReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpaReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
