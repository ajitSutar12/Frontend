import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesNomineeListComponent } from './shares-nominee-list.component';

describe('SharesNomineeListComponent', () => {
  let component: SharesNomineeListComponent;
  let fixture: ComponentFixture<SharesNomineeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesNomineeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesNomineeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
