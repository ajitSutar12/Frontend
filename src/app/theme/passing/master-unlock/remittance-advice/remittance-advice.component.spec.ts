import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceAdviceComponent } from './remittance-advice.component';

describe('RemittanceAdviceComponent', () => {
  let component: RemittanceAdviceComponent;
  let fixture: ComponentFixture<RemittanceAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemittanceAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemittanceAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
