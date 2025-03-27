import { Injectable } from '@angular/core';
import { ExpenseItem, ItemIcon } from './ppto-table.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  //LISTA DE GASTOS
  constructor() { 
    this.list.next(this.data);
   }
  
  private readonly list:BehaviorSubject<ExpenseItem[]> = new BehaviorSubject<ExpenseItem[]>([]);
  list$ = this.list.asObservable(); 

  private readonly data:ExpenseItem[]=[
    { id: 1, name: 'El chinito', category:'Yolo', subCategory: 'Restaurantes',date: '2025-03-16',amount: -149.90 },
    { id: 2, name: 'Menú', category:'Yolo', subCategory: 'Restaurantes', date: '2025-03-15',amount: -20 },
    { id: 3, name: 'Luz del sur', category:'Fijos', subCategory: 'Fijos',date: '2025-03-16',amount: -80.50 },
    { id: 4, name: 'Movistar', category:'Fijos', subCategory: 'Fijos',date: '2025-03-16',amount: -90.90 },
    { id: 5, name: 'Bet4', category:'Yolo', subCategory: 'Casino',date: '2025-03-11',amount: 1200 },
    /* { id: 6, name: 'El punto', category:'Yolo', subCategory: 'Spa',date: '2025-03-12',amount: -80 }, */
    { id: 7, name: 'Regalo Agu', category:'Yolo', subCategory: 'Extras',date: '2025-03-20',amount: -170.90 },
    { id: 8, name: 'Plaza vea', category:'Despensa', subCategory: 'Despensa',date: '2025-03-01',amount: -349.90 }
  ]


  addData(item:ExpenseItem){
    this.data.unshift( item );
    this.list.next(this.data)

  }



  // ICONOS (CATEGORÍAS)
  
  private readonly iconList = [
    {subcatogery: 'Restaurantes', color:'blue',path:'assets/icons/fries.svg'},
    {subcatogery: 'Fijos', color:'blue',path:'assets/icons/house.svg'},
    {subcatogery: 'Casino', color:'blue',path:'assets/icons/casino.svg'},
    {subcatogery: 'Spa', color:'blue',path:'assets/icons/spa.svg'},
    {subcatogery: 'Extras', color:'blue',path:'assets/icons/extra.svg'},
    {subcatogery: 'Despensa', color:'blue',path:'assets/icons/pantry.svg'},
  ]


  getIconList():ItemIcon[]{
    return this.iconList;
  }
}


