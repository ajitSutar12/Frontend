import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralisedPassingComponent } from './centralised-passing.component';

describe('CentralisedPassingComponent', () => {
  let component: CentralisedPassingComponent;
  let fixture: ComponentFixture<CentralisedPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralisedPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralisedPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
