import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandDraftDEIComponent } from './demand-draft-dei.component';

describe('DemandDraftDEIComponent', () => {
  let component: DemandDraftDEIComponent;
  let fixture: ComponentFixture<DemandDraftDEIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandDraftDEIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandDraftDEIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
