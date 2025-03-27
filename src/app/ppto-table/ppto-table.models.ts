export interface ExpenseItem{
    id: number;
    name: string;
    category: string;
    subCategory: string;
    date:string;
    amount: number;
}
export interface ItemIcon{
    subcatogery:string; 
    color:string;
    path:string;
}