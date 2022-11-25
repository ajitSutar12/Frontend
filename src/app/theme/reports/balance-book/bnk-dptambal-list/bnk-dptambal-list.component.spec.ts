import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkDptambalListComponent } from './bnk-dptambal-list.component';

describe('BnkDptambalListComponent', () => {
  let component: BnkDptambalListComponent;
  let fixture: ComponentFixture<BnkDptambalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkDptambalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkDptambalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
