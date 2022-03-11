import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrolldatatransferComponent } from './payrolldatatransfer.component';

describe('PayrolldatatransferComponent', () => {
  let component: PayrolldatatransferComponent;
  let fixture: ComponentFixture<PayrolldatatransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrolldatatransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrolldatatransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
