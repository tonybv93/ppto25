import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { TableService } from '../ppto-table/table.service';
import { ItemIcon } from '../ppto-table/ppto-table.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ppto-form',
  imports: [FormsModule],
  templateUrl: './ppto-form.component.html',
  styleUrl: './ppto-form.component.scss'
})
export class PptoFormComponent {
  @ViewChild('name') labelInput!: ElementRef<HTMLInputElement>;

  @Output() close = new EventEmitter<boolean>();
  categories:ItemIcon[];
  selectedDay = new Date();
  selectedCategory = 'Despensa';
  strDate = '';
  amount = 0;
  label = '';
  
  constructor(private readonly tableService:TableService){
    this.categories = tableService.getIconList();
  }

  ngOnInit(){
    this.strDate = this.selectedDay.toISOString().substring(0,10);
    setTimeout(() => {
      this.labelInput.nativeElement.focus();
    }, 10);
  }

  changeDate(n:number){
    this.selectedDay.setDate( this.selectedDay.getDate() + n );
    this.strDate = this.selectedDay.toISOString().substring(0,10);
  }

  addData(){
    this.tableService.addData( {
      id: Math.round(Math.random()*100),
      amount: this.amount,
      category: '',
      date: this.strDate,
      name: this.label,
      subCategory: this.selectedCategory
    })
  }

  resetInputs(){
    this.label = '';
    this.amount = 0;
  }

  addAndClose(){
    this.addData();
    this.close.emit();
  }

  addAndNew(){
    this.addData();
    this.resetInputs();
  }

}
