import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotticeComponent } from './nottice.component';

describe('NotticeComponent', () => {
  let component: NotticeComponent;
  let fixture: ComponentFixture<NotticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
