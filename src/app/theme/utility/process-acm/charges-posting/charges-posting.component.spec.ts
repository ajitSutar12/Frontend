import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesPostingComponent } from './charges-posting.component';

describe('ChargesPostingComponent', () => {
  let component: ChargesPostingComponent;
  let fixture: ComponentFixture<ChargesPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargesPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
