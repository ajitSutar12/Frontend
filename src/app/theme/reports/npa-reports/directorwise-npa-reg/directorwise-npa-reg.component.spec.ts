import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorwiseNpaRegComponent } from './directorwise-npa-reg.component';

describe('DirectorwiseNpaRegComponent', () => {
  let component: DirectorwiseNpaRegComponent;
  let fixture: ComponentFixture<DirectorwiseNpaRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorwiseNpaRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorwiseNpaRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
