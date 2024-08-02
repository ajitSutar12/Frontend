import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlrComponent } from './slr.component';

describe('SlrComponent', () => {
  let component: SlrComponent;
  let fixture: ComponentFixture<SlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
