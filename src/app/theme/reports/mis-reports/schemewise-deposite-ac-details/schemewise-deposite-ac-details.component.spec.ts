import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemewiseDepositeAcDetailsComponent } from './schemewise-deposite-ac-details.component';

describe('SchemewiseDepositeAcDetailsComponent', () => {
  let component: SchemewiseDepositeAcDetailsComponent;
  let fixture: ComponentFixture<SchemewiseDepositeAcDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemewiseDepositeAcDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemewiseDepositeAcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
