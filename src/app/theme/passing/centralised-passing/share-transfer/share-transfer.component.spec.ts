import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTransferComponent } from './share-transfer.component';

describe('ShareTransferComponent', () => {
  let component: ShareTransferComponent;
  let fixture: ComponentFixture<ShareTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
