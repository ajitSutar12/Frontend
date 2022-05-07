import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGurDetailsListComponent } from './bnk-gur-details-list.component';

describe('BnkGurDetailsListComponent', () => {
  let component: BnkGurDetailsListComponent;
  let fixture: ComponentFixture<BnkGurDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGurDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGurDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
