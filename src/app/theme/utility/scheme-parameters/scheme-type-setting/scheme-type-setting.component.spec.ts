import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeTypeSettingComponent } from './scheme-type-setting.component';

describe('SchemeTypeSettingComponent', () => {
  let component: SchemeTypeSettingComponent;
  let fixture: ComponentFixture<SchemeTypeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeTypeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeTypeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
