import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustidwiseIntroducerListComponent } from './custidwise-introducer-list.component';

describe('CustidwiseIntroducerListComponent', () => {
  let component: CustidwiseIntroducerListComponent;
  let fixture: ComponentFixture<CustidwiseIntroducerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustidwiseIntroducerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustidwiseIntroducerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
