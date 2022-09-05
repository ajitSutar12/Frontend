import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkPigmyCommissionRepoComponent } from './bnk-pigmy-commission-repo.component';

describe('BnkPigmyCommissionRepoComponent', () => {
  let component: BnkPigmyCommissionRepoComponent;
  let fixture: ComponentFixture<BnkPigmyCommissionRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkPigmyCommissionRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkPigmyCommissionRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
