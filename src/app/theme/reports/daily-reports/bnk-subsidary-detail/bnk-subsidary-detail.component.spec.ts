import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkSubsidaryDetailComponent } from './bnk-subsidary-detail.component';

describe('BnkSubsidaryDetailComponent', () => {
  let component: BnkSubsidaryDetailComponent;
  let fixture: ComponentFixture<BnkSubsidaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkSubsidaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkSubsidaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
