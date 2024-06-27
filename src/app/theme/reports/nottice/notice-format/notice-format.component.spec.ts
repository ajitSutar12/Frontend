import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeFormatComponent } from './notice-format.component';

describe('NoticeFormatComponent', () => {
  let component: NoticeFormatComponent;
  let fixture: ComponentFixture<NoticeFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
