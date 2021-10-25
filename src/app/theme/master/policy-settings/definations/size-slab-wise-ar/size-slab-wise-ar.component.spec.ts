import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeSlabWiseARComponent } from './size-slab-wise-ar.component';

describe('SizeSlabWiseARComponent', () => {
  let component: SizeSlabWiseARComponent;
  let fixture: ComponentFixture<SizeSlabWiseARComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeSlabWiseARComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeSlabWiseARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
