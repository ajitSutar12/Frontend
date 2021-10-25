import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationOTEComponent } from './reconciliation-ote.component';

describe('ReconciliationOTEComponent', () => {
  let component: ReconciliationOTEComponent;
  let fixture: ComponentFixture<ReconciliationOTEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconciliationOTEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationOTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
