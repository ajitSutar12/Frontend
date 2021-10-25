import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileVerticallyComponent } from './tile-vertically.component';

describe('TileVerticallyComponent', () => {
  let component: TileVerticallyComponent;
  let fixture: ComponentFixture<TileVerticallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileVerticallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileVerticallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
