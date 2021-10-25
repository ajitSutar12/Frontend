import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendTransferPostingComponent } from './dividend-transfer-posting.component';

describe('DividendTransferPostingComponent', () => {
  let component: DividendTransferPostingComponent;
  let fixture: ComponentFixture<DividendTransferPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendTransferPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendTransferPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
