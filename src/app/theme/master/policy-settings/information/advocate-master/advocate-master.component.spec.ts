import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocateMasterComponent } from './advocate-master.component';

describe('AdvocateMasterComponent', () => {
  let component: AdvocateMasterComponent;
  let fixture: ComponentFixture<AdvocateMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvocateMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvocateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
