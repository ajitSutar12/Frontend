import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkDedskBalListDepreComponent } from './bnk-dedsk-bal-list-depre.component';

describe('BnkDedskBalListDepreComponent', () => {
  let component: BnkDedskBalListDepreComponent;
  let fixture: ComponentFixture<BnkDedskBalListDepreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkDedskBalListDepreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkDedskBalListDepreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
