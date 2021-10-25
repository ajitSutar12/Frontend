import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileHorizontailyComponent } from './tile-horizontaily.component';

describe('TileHorizontailyComponent', () => {
  let component: TileHorizontailyComponent;
  let fixture: ComponentFixture<TileHorizontailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileHorizontailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileHorizontailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
