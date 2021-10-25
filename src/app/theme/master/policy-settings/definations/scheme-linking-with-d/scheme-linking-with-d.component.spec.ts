import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeLinkingWithDComponent } from './scheme-linking-with-d.component';

describe('SchemeLinkingWithDComponent', () => {
  let component: SchemeLinkingWithDComponent;
  let fixture: ComponentFixture<SchemeLinkingWithDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeLinkingWithDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeLinkingWithDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
