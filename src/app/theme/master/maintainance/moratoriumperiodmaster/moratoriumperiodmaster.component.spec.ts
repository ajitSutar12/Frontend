import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoratoriumperiodmasterComponent } from './moratoriumperiodmaster.component';

describe('MoratoriumperiodmasterComponent', () => {
  let component: MoratoriumperiodmasterComponent;
  let fixture: ComponentFixture<MoratoriumperiodmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoratoriumperiodmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoratoriumperiodmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
