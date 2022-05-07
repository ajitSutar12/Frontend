import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGLConsistRepoComponent } from './bnk-glconsist-repo.component';

describe('BnkGLConsistRepoComponent', () => {
  let component: BnkGLConsistRepoComponent;
  let fixture: ComponentFixture<BnkGLConsistRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGLConsistRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGLConsistRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
