import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingMasterComponent } from './saving-master.component';

describe('SavingMasterComponent', () => {
  let component: SavingMasterComponent;
  let fixture: ComponentFixture<SavingMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
