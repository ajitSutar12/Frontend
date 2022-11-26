import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdExpiryListComponent } from './lcd-expiry-list.component';

describe('LcdExpiryListComponent', () => {
  let component: LcdExpiryListComponent;
  let fixture: ComponentFixture<LcdExpiryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdExpiryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdExpiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
