import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoryMasterComponent } from './item-category-master.component';

describe('ItemCatagoryMasterComponent', () => {
  let component: ItemCategoryMasterComponent;
  let fixture: ComponentFixture<ItemCategoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCategoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCategoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
