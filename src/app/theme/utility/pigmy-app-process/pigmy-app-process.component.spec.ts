import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyAppProcessComponent } from './pigmy-app-process.component';

describe('PigmyAppProcessComponent', () => {
  let component: PigmyAppProcessComponent;
  let fixture: ComponentFixture<PigmyAppProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PigmyAppProcessComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyAppProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
