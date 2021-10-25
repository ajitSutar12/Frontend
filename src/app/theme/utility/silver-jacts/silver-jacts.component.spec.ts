import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverJACTSComponent } from './silver-jacts.component';

describe('SilverJACTSComponent', () => {
  let component: SilverJACTSComponent;
  let fixture: ComponentFixture<SilverJACTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverJACTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverJACTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
