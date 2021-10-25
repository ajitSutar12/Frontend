import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMasterComponent } from './director-master.component';

describe('DirectorMasterComponent', () => {
  let component: DirectorMasterComponent;
  let fixture: ComponentFixture<DirectorMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
