import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmtsizeWiseBalListComponent } from './amtsize-wise-bal-list.component';

describe('AmtsizeWiseBalListComponent', () => {
  let component: AmtsizeWiseBalListComponent;
  let fixture: ComponentFixture<AmtsizeWiseBalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmtsizeWiseBalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmtsizeWiseBalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
