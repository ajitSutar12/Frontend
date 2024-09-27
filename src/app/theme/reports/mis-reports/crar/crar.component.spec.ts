import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrarComponent } from './crar.component';

describe('CrarComponent', () => {
  let component: CrarComponent;
  let fixture: ComponentFixture<CrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
