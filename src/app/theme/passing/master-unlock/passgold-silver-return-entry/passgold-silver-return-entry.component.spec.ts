import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassgoldSilverReturnEntryComponent } from './passgold-silver-return-entry.component';

describe('PassgoldSilverReturnEntryComponent', () => {
  let component: PassgoldSilverReturnEntryComponent;
  let fixture: ComponentFixture<PassgoldSilverReturnEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassgoldSilverReturnEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassgoldSilverReturnEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
