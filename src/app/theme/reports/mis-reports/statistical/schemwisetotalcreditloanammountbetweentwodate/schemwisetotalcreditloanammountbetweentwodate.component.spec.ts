import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemwisetotalcreditloanammountbetweentwodateComponent } from './schemwisetotalcreditloanammountbetweentwodate.component';

describe('SchemwisetotalcreditloanammountbetweentwodateComponent', () => {
  let component: SchemwisetotalcreditloanammountbetweentwodateComponent;
  let fixture: ComponentFixture<SchemwisetotalcreditloanammountbetweentwodateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemwisetotalcreditloanammountbetweentwodateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemwisetotalcreditloanammountbetweentwodateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
