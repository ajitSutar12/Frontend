import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendPostComponent } from './dividend-post.component';

describe('DividendPostComponent', () => {
  let component: DividendPostComponent;
  let fixture: ComponentFixture<DividendPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
