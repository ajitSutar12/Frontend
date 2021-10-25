import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesTransferComponent } from './shares-transfer.component';

describe('SharesTransferComponent', () => {
  let component: SharesTransferComponent;
  let fixture: ComponentFixture<SharesTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
