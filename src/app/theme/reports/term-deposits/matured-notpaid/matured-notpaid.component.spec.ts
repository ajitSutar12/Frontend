import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturedNotpaidComponent } from './matured-notpaid.component';

describe('MaturedNotpaidComponent', () => {
  let component: MaturedNotpaidComponent;
  let fixture: ComponentFixture<MaturedNotpaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaturedNotpaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturedNotpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
