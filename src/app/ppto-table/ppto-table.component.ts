import { Component } from '@angular/core';
import { PptoRowComponent } from './ppto-row/ppto-row.component';
import { ExpenseItem } from './ppto-table.models';
import { TableService } from './table.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ppto-table',
  imports: [PptoRowComponent],
  templateUrl: './ppto-table.component.html',
  styleUrl: './ppto-table.component.scss'
})
export class PptoTableComponent {
  tableData:ExpenseItem[]=[];
  loading = true;
  $list:Observable<ExpenseItem[]>;
  constructor(private readonly service:TableService){
    this.$list = this.service.list$
  }

  
  ngOnInit(){
    this.updateData();
  }

  updateData(){
    this.loading = true;
    this.$list.subscribe({
      next: (r)=>{
        this.loading = false;
        this.tableData = r;
      }
    })
  }

}
