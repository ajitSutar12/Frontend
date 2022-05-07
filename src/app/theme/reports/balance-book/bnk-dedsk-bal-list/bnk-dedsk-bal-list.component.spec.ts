import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkDedskBalListComponent } from './bnk-dedsk-bal-list.component';

describe('BnkDedskBalListComponent', () => {
  let component: BnkDedskBalListComponent;
  let fixture: ComponentFixture<BnkDedskBalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkDedskBalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkDedskBalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
