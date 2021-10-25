import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienMarkClearComponent } from './lien-mark-clear.component';

describe('LienMarkClearComponent', () => {
  let component: LienMarkClearComponent;
  let fixture: ComponentFixture<LienMarkClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienMarkClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienMarkClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
