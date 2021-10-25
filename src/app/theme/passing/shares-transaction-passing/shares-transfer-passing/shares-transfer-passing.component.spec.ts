import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesTransferPassingComponent } from './shares-transfer-passing.component';

describe('SharesTransferPassingComponent', () => {
  let component: SharesTransferPassingComponent;
  let fixture: ComponentFixture<SharesTransferPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesTransferPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesTransferPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
