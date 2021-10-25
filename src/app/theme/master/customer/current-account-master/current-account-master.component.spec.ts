import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAccountMasterComponent } from './current-account-master.component';

describe('CurrentAccountMasterComponent', () => {
  let component: CurrentAccountMasterComponent;
  let fixture: ComponentFixture<CurrentAccountMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAccountMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAccountMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
