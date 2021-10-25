import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGroupLinkMasterComponent } from './company-group-link-master.component';

describe('CompanyGroupLinkMasterComponent', () => {
  let component: CompanyGroupLinkMasterComponent;
  let fixture: ComponentFixture<CompanyGroupLinkMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGroupLinkMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGroupLinkMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
