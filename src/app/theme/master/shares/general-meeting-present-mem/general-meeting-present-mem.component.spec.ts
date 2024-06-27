import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMeetingPresentMemComponent } from './general-meeting-present-mem.component';

describe('GeneralMeetingPresentMemComponent', () => {
  let component: GeneralMeetingPresentMemComponent;
  let fixture: ComponentFixture<GeneralMeetingPresentMemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMeetingPresentMemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMeetingPresentMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
