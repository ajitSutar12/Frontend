import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeVaultToCashierComponent } from './safe-vault-to-cashier.component';

describe('SafeVaultToCashierComponent', () => {
  let component: SafeVaultToCashierComponent;
  let fixture: ComponentFixture<SafeVaultToCashierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeVaultToCashierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeVaultToCashierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
