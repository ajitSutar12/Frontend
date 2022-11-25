import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancashcreditacOpensanctiondatewiseComponent } from './loancashcreditac-opensanctiondatewise.component';

describe('LoancashcreditacOpensanctiondatewiseComponent', () => {
  let component: LoancashcreditacOpensanctiondatewiseComponent;
  let fixture: ComponentFixture<LoancashcreditacOpensanctiondatewiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoancashcreditacOpensanctiondatewiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoancashcreditacOpensanctiondatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
