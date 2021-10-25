import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPigmyComponent } from './master-pigmy.component';

describe('MasterPigmyComponent', () => {
  let component: MasterPigmyComponent;
  let fixture: ComponentFixture<MasterPigmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPigmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPigmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
