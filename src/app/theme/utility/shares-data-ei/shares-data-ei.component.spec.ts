import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesDataEIComponent } from './shares-data-ei.component';

describe('SharesDataEIComponent', () => {
  let component: SharesDataEIComponent;
  let fixture: ComponentFixture<SharesDataEIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesDataEIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesDataEIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
