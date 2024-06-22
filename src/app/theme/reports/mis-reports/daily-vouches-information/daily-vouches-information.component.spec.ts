import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVouchesInformationComponent } from './daily-vouches-information.component';

describe('DailyVouchesInformationComponent', () => {
  let component: DailyVouchesInformationComponent;
  let fixture: ComponentFixture<DailyVouchesInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyVouchesInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyVouchesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
