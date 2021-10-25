import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesMasterComponent } from './shares-master.component';

describe('SharesMasterComponent', () => {
  let component: SharesMasterComponent;
  let fixture: ComponentFixture<SharesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
