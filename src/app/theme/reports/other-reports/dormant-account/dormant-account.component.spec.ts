import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormantAccountComponent } from './dormant-account.component';

describe('DormantAccountComponent', () => {
  let component: DormantAccountComponent;
  let fixture: ComponentFixture<DormantAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormantAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormantAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
