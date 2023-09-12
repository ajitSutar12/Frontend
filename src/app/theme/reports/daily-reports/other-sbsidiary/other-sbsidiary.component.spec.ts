import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSbsidiaryComponent } from './other-sbsidiary.component';

describe('OtherSbsidiaryComponent', () => {
  let component: OtherSbsidiaryComponent;
  let fixture: ComponentFixture<OtherSbsidiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherSbsidiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSbsidiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
