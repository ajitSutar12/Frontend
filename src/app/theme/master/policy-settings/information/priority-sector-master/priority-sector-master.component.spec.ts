import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritySectorMasterComponent } from './priority-sector-master.component';

describe('PrioritySectorMasterComponent', () => {
  let component: PrioritySectorMasterComponent;
  let fixture: ComponentFixture<PrioritySectorMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioritySectorMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritySectorMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
