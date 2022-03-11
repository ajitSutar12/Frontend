import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferToGLbyClosingACComponent } from './transfer-to-glby-closing-ac.component';

describe('TransferToGLbyClosingACComponent', () => {
  let component: TransferToGLbyClosingACComponent;
  let fixture: ComponentFixture<TransferToGLbyClosingACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferToGLbyClosingACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferToGLbyClosingACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
