import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconcialationStatementComponent } from './reconcialation-statement.component';

describe('ReconcialationStatementComponent', () => {
  let component: ReconcialationStatementComponent;
  let fixture: ComponentFixture<ReconcialationStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconcialationStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconcialationStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
