import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkDormantAcListComponent } from './bnk-dormant-ac-list.component';

describe('BnkDormantAcListComponent', () => {
  let component: BnkDormantAcListComponent;
  let fixture: ComponentFixture<BnkDormantAcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkDormantAcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkDormantAcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
