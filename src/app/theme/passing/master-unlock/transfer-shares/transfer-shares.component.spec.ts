import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSharesComponent } from './transfer-shares.component';

describe('TransferSharesComponent', () => {
  let component: TransferSharesComponent;
  let fixture: ComponentFixture<TransferSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
