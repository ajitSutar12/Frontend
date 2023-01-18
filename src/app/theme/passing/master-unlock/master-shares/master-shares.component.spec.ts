import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSharesComponent } from './master-shares.component';

describe('MasterSharesComponent', () => {
  let component: MasterSharesComponent;
  let fixture: ComponentFixture<MasterSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
