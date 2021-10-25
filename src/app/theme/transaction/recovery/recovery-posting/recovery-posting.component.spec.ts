import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryPostingComponent } from './recovery-posting.component';

describe('RecoveryPostingComponent', () => {
  let component: RecoveryPostingComponent;
  let fixture: ComponentFixture<RecoveryPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
