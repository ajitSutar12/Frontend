import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedDepCatwiselistComponent } from './ded-dep-catwiselist.component';

describe('DedDepCatwiselistComponent', () => {
  let component: DedDepCatwiselistComponent;
  let fixture: ComponentFixture<DedDepCatwiselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedDepCatwiselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedDepCatwiselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
