import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldSilverReturnEntryComponent } from './gold-silver-return-entry.component';

describe('GoldSilverReturnEntryComponent', () => {
  let component: GoldSilverReturnEntryComponent;
  let fixture: ComponentFixture<GoldSilverReturnEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldSilverReturnEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldSilverReturnEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
