import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkLienMarkedAcListComponent } from './bnk-lien-marked-ac-list.component';

describe('BnkLienMarkedAcListComponent', () => {
  let component: BnkLienMarkedAcListComponent;
  let fixture: ComponentFixture<BnkLienMarkedAcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkLienMarkedAcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkLienMarkedAcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
