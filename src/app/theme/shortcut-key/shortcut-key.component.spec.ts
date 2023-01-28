import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutKeyComponent } from './shortcut-key.component';

describe('ShortcutKeyComponent', () => {
  let component: ShortcutKeyComponent;
  let fixture: ComponentFixture<ShortcutKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
