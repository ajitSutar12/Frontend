import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasferredMemberOBComponent } from './trasferred-member-ob.component';

describe('TrasferredMemberOBComponent', () => {
  let component: TrasferredMemberOBComponent;
  let fixture: ComponentFixture<TrasferredMemberOBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasferredMemberOBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasferredMemberOBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
