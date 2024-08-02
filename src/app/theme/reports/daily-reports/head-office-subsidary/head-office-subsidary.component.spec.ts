import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfficeSubsidaryComponent } from './head-office-subsidary.component';

describe('HeadOfficeSubsidaryComponent', () => {
  let component: HeadOfficeSubsidaryComponent;
  let fixture: ComponentFixture<HeadOfficeSubsidaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadOfficeSubsidaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfficeSubsidaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
