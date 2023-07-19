import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmaMemberUpdationComponent } from './gma-member-updation.component';

describe('GmaMemberUpdationComponent', () => {
  let component: GmaMemberUpdationComponent;
  let fixture: ComponentFixture<GmaMemberUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmaMemberUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmaMemberUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
