import { Component, Input } from '@angular/core';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { BarMeasures, ChatData } from './chat.models';

@Component({
  selector: 'app-ppto-chart',
  imports: [ChartBarComponent],
  templateUrl: './ppto-chart.component.html',
  styleUrl: './ppto-chart.component.scss'
})
export class PptoChartComponent {

  @Input() data:ChatData[] = [ ];

  verticalMarks:number[] = [];

  measures:BarMeasures[] = []

  labelWidtgh = '';

  readonly lines = 5;

  ngOnInit(){
    this.calculateBarHeights();
    this.labelWidtgh = (100/this.measures.length) + '%';
  }

  calculateBarHeights(){
    this.measures = [];
    let maxHeight =  Math.max(
      Math.max(...this.data.map(category => category.max)),
      Math.max(...this.data.map(category => category.used))
    ); 

    this.verticalMarks = this.generateRange(this.lines,maxHeight);

    this.data.forEach( c => {    
      
      // OVERLOAD
      let overload ='0';
      let available = '0';
      let usedx = '0';
      if ( c.used - c.max > 0) {
        overload = Math.round(100*(c.used - c.max)/maxHeight).toString();
        usedx = Math.round(100*(c.max)/maxHeight).toString();
      }else{
        // AVAILABLE
        available =   Math.round(100*(c.max - c.used)/maxHeight).toString();
        usedx = Math.round(100*(c.used)/maxHeight).toString();
      }
      // WHITESPACE
      let whiteSpace =   Math.round((maxHeight-(Math.max( c.max, c.used )))*100/maxHeight);

      

      this.measures.push({
        available: available + '%',
        overload: overload + '%',
        used: usedx +'%',
        whiteSpace: whiteSpace + '%',
        label: c.label
      })
    });
    console.log(this.measures)
  }

  generateRange(n: number, max: number): number[] {
    if (n <= 1) return [max];     
    return Array.from({ length: n }, (_, i) => Math.round ((i * max) / (n - 1)));
  }
}
