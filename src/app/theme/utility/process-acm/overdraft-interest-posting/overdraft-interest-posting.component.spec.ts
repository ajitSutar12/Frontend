import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdraftInterestPostingComponent } from './overdraft-interest-posting.component';

describe('OverdraftInterestPostingComponent', () => {
  let component: OverdraftInterestPostingComponent;
  let fixture: ComponentFixture<OverdraftInterestPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdraftInterestPostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdraftInterestPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
