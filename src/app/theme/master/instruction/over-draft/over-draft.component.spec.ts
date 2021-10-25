import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverDraftComponent } from './over-draft.component';

describe('OverDraftComponent', () => {
  let component: OverDraftComponent;
  let fixture: ComponentFixture<OverDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
