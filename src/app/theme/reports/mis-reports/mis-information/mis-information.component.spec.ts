import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisInformationComponent } from './mis-information.component';

describe('MisInformationComponent', () => {
  let component: MisInformationComponent;
  let fixture: ComponentFixture<MisInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
