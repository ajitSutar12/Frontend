import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtypedepositListComponent } from './abtypedeposit-list.component';

describe('AbtypedepositListComponent', () => {
  let component: AbtypedepositListComponent;
  let fixture: ComponentFixture<AbtypedepositListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbtypedepositListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbtypedepositListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
