import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInputGlHeadSettingComponent } from './transaction-input-gl-head-setting.component';

describe('TransactionInputGlHeadSettingComponent', () => {
  let component: TransactionInputGlHeadSettingComponent;
  let fixture: ComponentFixture<TransactionInputGlHeadSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionInputGlHeadSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionInputGlHeadSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
