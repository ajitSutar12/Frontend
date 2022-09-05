import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesADRComponent } from './shares-adr.component';

describe('SharesADRComponent', () => {
  let component: SharesADRComponent;
  let fixture: ComponentFixture<SharesADRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesADRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesADRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
