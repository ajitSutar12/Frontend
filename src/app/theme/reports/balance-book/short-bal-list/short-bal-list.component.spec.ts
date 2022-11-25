import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBalListComponent } from './short-bal-list.component';

describe('ShortBalListComponent', () => {
  let component: ShortBalListComponent;
  let fixture: ComponentFixture<ShortBalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortBalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
