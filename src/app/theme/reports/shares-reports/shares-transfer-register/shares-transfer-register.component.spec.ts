import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesTransferRegisterComponent } from './shares-transfer-register.component';

describe('SharesTransferRegisterComponent', () => {
  let component: SharesTransferRegisterComponent;
  let fixture: ComponentFixture<SharesTransferRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesTransferRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesTransferRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
