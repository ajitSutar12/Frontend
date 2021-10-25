import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationMasterComponent } from './operation-master.component';

describe('OperationMasterComponent', () => {
  let component: OperationMasterComponent;
  let fixture: ComponentFixture<OperationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
