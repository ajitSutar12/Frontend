import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyHandbookComponent } from './pigmy-handbook.component';

describe('PigmyHandbookComponent', () => {
  let component: PigmyHandbookComponent;
  let fixture: ComponentFixture<PigmyHandbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyHandbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyHandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
