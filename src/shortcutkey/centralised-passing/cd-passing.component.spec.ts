import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPassingComponent } from './cd-passing.component';

describe('CdPassingComponent', () => {
  let component: CdPassingComponent;
  let fixture: ComponentFixture<CdPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
