import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldAndSilverComponent } from './gold-and-silver.component';

describe('GoldAndSilverComponent', () => {
  let component: GoldAndSilverComponent;
  let fixture: ComponentFixture<GoldAndSilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldAndSilverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldAndSilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
