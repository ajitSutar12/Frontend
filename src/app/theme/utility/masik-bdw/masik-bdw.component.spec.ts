import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasikBDWComponent } from './masik-bdw.component';

describe('MasikBDWComponent', () => {
  let component: MasikBDWComponent;
  let fixture: ComponentFixture<MasikBDWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasikBDWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasikBDWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
