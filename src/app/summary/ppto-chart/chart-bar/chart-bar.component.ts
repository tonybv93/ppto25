import { Component, Input } from '@angular/core';
import { BarMeasures } from '../chat.models';

@Component({
  selector: 'app-chart-bar',
  imports: [],
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.scss'
})
export class ChartBarComponent {
  @Input() measures:BarMeasures = {
    used :'30%',
    available :'20%',
    overload :'10%',
    whiteSpace :'30%',
    label:''
  }
}
