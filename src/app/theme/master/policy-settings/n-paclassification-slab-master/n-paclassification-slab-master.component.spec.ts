import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPAClassificationSlabMasterComponent } from './n-paclassification-slab-master.component';

describe('NPAClassificationSlabMasterComponent', () => {
  let component: NPAClassificationSlabMasterComponent;
  let fixture: ComponentFixture<NPAClassificationSlabMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPAClassificationSlabMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPAClassificationSlabMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
