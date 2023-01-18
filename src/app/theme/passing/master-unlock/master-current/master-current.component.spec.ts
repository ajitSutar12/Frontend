import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCurrentComponent } from './master-current.component';

describe('MasterCurrentComponent', () => {
  let component: MasterCurrentComponent;
  let fixture: ComponentFixture<MasterCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
