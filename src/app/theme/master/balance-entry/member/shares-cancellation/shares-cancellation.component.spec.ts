import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesCancellationComponent } from './shares-cancellation.component';

describe('SharesCancellationComponent', () => {
  let component: SharesCancellationComponent;
  let fixture: ComponentFixture<SharesCancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
