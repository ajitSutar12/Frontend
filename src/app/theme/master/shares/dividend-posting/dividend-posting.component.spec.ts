import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendPostingComponent } from './dividend-posting.component';

describe('DividendPostingComponent', () => {
  let component: DividendPostingComponent;
  let fixture: ComponentFixture<DividendPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
