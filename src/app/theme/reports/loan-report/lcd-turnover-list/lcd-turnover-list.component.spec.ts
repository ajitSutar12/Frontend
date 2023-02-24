import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdTurnoverListComponent } from './lcd-turnover-list.component';

describe('LcdTurnoverListComponent', () => {
  let component: LcdTurnoverListComponent;
  let fixture: ComponentFixture<LcdTurnoverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdTurnoverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdTurnoverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
