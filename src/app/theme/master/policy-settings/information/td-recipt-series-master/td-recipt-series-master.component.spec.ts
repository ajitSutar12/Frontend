import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdReciptSeriesMasterComponent } from './td-recipt-series-master.component';

describe('TdReciptSeriesMasterComponent', () => {
  let component: TdReciptSeriesMasterComponent;
  let fixture: ComponentFixture<TdReciptSeriesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdReciptSeriesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdReciptSeriesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
