import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksDirectorsAndRelativesOverdueComponent } from './banks-directors-and-relatives-overdue.component';

describe('BanksDirectorsAndRelativesOverdueComponent', () => {
  let component: BanksDirectorsAndRelativesOverdueComponent;
  let fixture: ComponentFixture<BanksDirectorsAndRelativesOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksDirectorsAndRelativesOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksDirectorsAndRelativesOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
