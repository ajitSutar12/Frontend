import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChargesListComponent } from './service-charges-list.component';

describe('ServiceChargesListComponent', () => {
  let component: ServiceChargesListComponent;
  let fixture: ComponentFixture<ServiceChargesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceChargesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChargesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
