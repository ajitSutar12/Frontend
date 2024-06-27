import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvnidhiComponent } from './svnidhi.component';

describe('SvnidhiComponent', () => {
  let component: SvnidhiComponent;
  let fixture: ComponentFixture<SvnidhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvnidhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvnidhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
