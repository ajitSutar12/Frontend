import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemwiseTotalcreditloanComponent } from './schemwise-totalcreditloan.component';

describe('SchemwiseTotalcreditloanComponent', () => {
  let component: SchemwiseTotalcreditloanComponent;
  let fixture: ComponentFixture<SchemwiseTotalcreditloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemwiseTotalcreditloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemwiseTotalcreditloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
