import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdRenewalListComponent } from './lcd-renewal-list.component';

describe('LcdRenewalListComponent', () => {
  let component: LcdRenewalListComponent;
  let fixture: ComponentFixture<LcdRenewalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdRenewalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdRenewalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
