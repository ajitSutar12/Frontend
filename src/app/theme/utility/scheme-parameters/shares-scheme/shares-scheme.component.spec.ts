import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesSchemeComponent } from './shares-scheme.component';

describe('SharesSchemeComponent', () => {
  let component: SharesSchemeComponent;
  let fixture: ComponentFixture<SharesSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
