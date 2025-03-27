import { Component } from '@angular/core';
import { PptoChartComponent } from './ppto-chart/ppto-chart.component';

@Component({
  selector: 'app-summary',
  imports: [PptoChartComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
categories = [
  { max: 600, used: 583, id: 1, label: 'Despensa' },
  { max: 1000, used: 1033, id: 2, label: 'Restaurantes' },
  { max: 550, used: 684, id: 3, label: 'Extras' },
  { max: 520, used: 241, id: 4, label: 'Fijos' },
  { max: 230, used: 180, id: 5, label: 'Transorte' }
]
}
