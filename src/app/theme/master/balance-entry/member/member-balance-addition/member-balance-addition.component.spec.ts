import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBalanceAdditionComponent } from './member-balance-addition.component';

describe('MemberBalanceAdditionComponent', () => {
  let component: MemberBalanceAdditionComponent;
  let fixture: ComponentFixture<MemberBalanceAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberBalanceAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberBalanceAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
