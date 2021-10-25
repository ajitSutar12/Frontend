import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumBalanceMasterComponent } from './minimum-balance-master.component';

describe('MinimumBalanceMasterComponent', () => {
  let component: MinimumBalanceMasterComponent;
  let fixture: ComponentFixture<MinimumBalanceMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimumBalanceMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimumBalanceMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
