import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesCCTSComponent } from './shares-ccts.component';

describe('SharesCCTSComponent', () => {
  let component: SharesCCTSComponent;
  let fixture: ComponentFixture<SharesCCTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesCCTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesCCTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
