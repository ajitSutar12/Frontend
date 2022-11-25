import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkCatbalListComponent } from './bnk-catbal-list.component';

describe('BnkCatbalListComponent', () => {
  let component: BnkCatbalListComponent;
  let fixture: ComponentFixture<BnkCatbalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkCatbalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkCatbalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
