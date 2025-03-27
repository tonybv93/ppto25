import { Component, Input } from '@angular/core';
import { ExpenseItem, ItemIcon } from '../ppto-table.models';
import { SolesPipe } from '../../shared/soles.pipe';
import { DatePipe } from '@angular/common';
import { TableService } from '../table.service';

@Component({
  selector: 'app-ppto-row',
  imports: [SolesPipe, DatePipe],
  templateUrl: './ppto-row.component.html',
  styleUrl: './ppto-row.component.scss'
})
export class PptoRowComponent {
  @Input() data!:ExpenseItem;
  icon!:ItemIcon|undefined;
  
  constructor(private readonly service:TableService){}

  ngOnInit(){
    this.findIcon();
  }

  findIcon(){
    const iconslist = this.service.getIconList();
    this.icon = iconslist.find(f=>f.subcatogery==this.data.subCategory);
  }
}
