import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakerSectionMasterComponent } from './weaker-section-master.component';

describe('WeakerSectionMasterComponent', () => {
  let component: WeakerSectionMasterComponent;
  let fixture: ComponentFixture<WeakerSectionMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeakerSectionMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeakerSectionMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
