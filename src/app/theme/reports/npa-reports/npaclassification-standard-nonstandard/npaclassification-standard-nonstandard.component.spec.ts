import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaclassificationStandardNonstandardComponent } from './npaclassification-standard-nonstandard.component';

describe('NpaclassificationStandardNonstandardComponent', () => {
  let component: NpaclassificationStandardNonstandardComponent;
  let fixture: ComponentFixture<NpaclassificationStandardNonstandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpaclassificationStandardNonstandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpaclassificationStandardNonstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
