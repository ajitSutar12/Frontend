import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryClearkMasterComponent } from './recovery-cleark-master.component';

describe('RecoveryClearkMasterComponent', () => {
  let component: RecoveryClearkMasterComponent;
  let fixture: ComponentFixture<RecoveryClearkMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryClearkMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryClearkMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
