import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldSilverSecurityComponent } from './gold-silver-security.component';

describe('GoldSilverSecurityComponent', () => {
  let component: GoldSilverSecurityComponent;
  let fixture: ComponentFixture<GoldSilverSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldSilverSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldSilverSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
