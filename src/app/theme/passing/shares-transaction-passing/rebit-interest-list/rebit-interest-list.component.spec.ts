import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebitInterestListComponent } from './rebit-interest-list.component';

describe('RebitInterestListComponent', () => {
  let component: RebitInterestListComponent;
  let fixture: ComponentFixture<RebitInterestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebitInterestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebitInterestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
