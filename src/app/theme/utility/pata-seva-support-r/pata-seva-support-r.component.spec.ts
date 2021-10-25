import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PataSevaSupportRComponent } from './pata-seva-support-r.component';

describe('PataSevaSupportRComponent', () => {
  let component: PataSevaSupportRComponent;
  let fixture: ComponentFixture<PataSevaSupportRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PataSevaSupportRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PataSevaSupportRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
