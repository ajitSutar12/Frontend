import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframecomponentComponent } from './iframecomponent.component';

describe('IframecomponentComponent', () => {
  let component: IframecomponentComponent;
  let fixture: ComponentFixture<IframecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
