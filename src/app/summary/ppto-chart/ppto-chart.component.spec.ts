import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptoChartComponent } from './ppto-chart.component';

describe('PptoChartComponent', () => {
  let component: PptoChartComponent;
  let fixture: ComponentFixture<PptoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PptoChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PptoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
