import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixMasterComponent } from './prefix-master.component';

describe('PrefixMasterComponent', () => {
  let component: PrefixMasterComponent;
  let fixture: ComponentFixture<PrefixMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefixMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
