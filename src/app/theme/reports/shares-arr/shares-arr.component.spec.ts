import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesARRComponent } from './shares-arr.component';

describe('SharesARRComponent', () => {
  let component: SharesARRComponent;
  let fixture: ComponentFixture<SharesARRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesARRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesARRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
