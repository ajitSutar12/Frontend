import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLiablityViewComponent } from './member-liablity-view.component';

describe('MemberLiablityViewComponent', () => {
  let component: MemberLiablityViewComponent;
  let fixture: ComponentFixture<MemberLiablityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberLiablityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLiablityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
