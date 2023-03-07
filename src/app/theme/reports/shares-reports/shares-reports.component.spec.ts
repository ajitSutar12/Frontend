import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesReportsComponent } from './shares-reports.component';

describe('SharesReportsComponent', () => {
  let component: SharesReportsComponent;
  let fixture: ComponentFixture<SharesReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
