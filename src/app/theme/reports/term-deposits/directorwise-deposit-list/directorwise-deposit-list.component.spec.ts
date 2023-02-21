import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorwiseDepositListComponent } from './directorwise-deposit-list.component';

describe('DirectorwiseDepositListComponent', () => {
  let component: DirectorwiseDepositListComponent;
  let fixture: ComponentFixture<DirectorwiseDepositListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorwiseDepositListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorwiseDepositListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
