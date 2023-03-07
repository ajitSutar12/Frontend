import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesReturnRegisterComponent } from './shares-return-register.component';

describe('SharesReturnRegisterComponent', () => {
  let component: SharesReturnRegisterComponent;
  let fixture: ComponentFixture<SharesReturnRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesReturnRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesReturnRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
