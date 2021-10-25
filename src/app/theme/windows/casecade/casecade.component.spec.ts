import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasecadeComponent } from './casecade.component';

describe('CasecadeComponent', () => {
  let component: CasecadeComponent;
  let fixture: ComponentFixture<CasecadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasecadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasecadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
