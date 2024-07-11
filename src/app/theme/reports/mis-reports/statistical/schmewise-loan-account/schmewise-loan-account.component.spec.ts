import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmewiseLoanAccountComponent } from './schmewise-loan-account.component';

describe('SchmewiseLoanAccountComponent', () => {
  let component: SchmewiseLoanAccountComponent;
  let fixture: ComponentFixture<SchmewiseLoanAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchmewiseLoanAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchmewiseLoanAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
