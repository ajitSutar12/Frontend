import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAnamatComponent } from './master-anamat.component';

describe('MasterAnamatComponent', () => {
  let component: MasterAnamatComponent;
  let fixture: ComponentFixture<MasterAnamatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAnamatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAnamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
