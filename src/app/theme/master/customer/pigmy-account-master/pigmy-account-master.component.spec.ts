import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyAccountMasterComponent } from './pigmy-account-master.component';

describe('PigmyAccountMasterComponent', () => {
  let component: PigmyAccountMasterComponent;
  let fixture: ComponentFixture<PigmyAccountMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyAccountMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyAccountMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
