import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityMasterComponent } from './authority-master.component';

describe('AuthorityMasterComponent', () => {
  let component: AuthorityMasterComponent;
  let fixture: ComponentFixture<AuthorityMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
