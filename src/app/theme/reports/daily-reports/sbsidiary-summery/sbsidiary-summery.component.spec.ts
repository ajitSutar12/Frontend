import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsidiarySummeryComponent } from './sbsidiary-summery.component';

describe('SbsidiarySummeryComponent', () => {
  let component: SbsidiarySummeryComponent;
  let fixture: ComponentFixture<SbsidiarySummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbsidiarySummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsidiarySummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
