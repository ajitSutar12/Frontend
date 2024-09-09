import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilScoreComponent } from './cibil-score.component';

describe('CibilScoreComponent', () => {
  let component: CibilScoreComponent;
  let fixture: ComponentFixture<CibilScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CibilScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
