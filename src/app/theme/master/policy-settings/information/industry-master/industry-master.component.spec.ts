import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryMasterComponent } from './industry-master.component';

describe('IndustaryMasterComponent', () => {
  let component: IndustryMasterComponent;
  let fixture: ComponentFixture<IndustryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
