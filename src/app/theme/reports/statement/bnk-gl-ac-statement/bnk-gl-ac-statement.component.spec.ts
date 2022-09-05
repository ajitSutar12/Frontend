import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGlAcStatementComponent } from './bnk-gl-ac-statement.component';

describe('BnkGlAcStatementComponent', () => {
  let component: BnkGlAcStatementComponent;
  let fixture: ComponentFixture<BnkGlAcStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGlAcStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGlAcStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
