import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSavingComponent } from './master-saving.component';

describe('MasterSavingComponent', () => {
  let component: MasterSavingComponent;
  let fixture: ComponentFixture<MasterSavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
