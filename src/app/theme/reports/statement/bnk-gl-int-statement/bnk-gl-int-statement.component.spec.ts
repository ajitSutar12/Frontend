import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGlIntStatementComponent } from './bnk-gl-int-statement.component';

describe('BnkGlIntStatementComponent', () => {
  let component: BnkGlIntStatementComponent;
  let fixture: ComponentFixture<BnkGlIntStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGlIntStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGlIntStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
