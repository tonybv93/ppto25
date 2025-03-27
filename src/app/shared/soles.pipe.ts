import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soles'
})
export class SolesPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value == null || isNaN(Number(value))) {
      return 'S/ 0.00';
    }

    const formattedValue = new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));

    return formattedValue.replace('PEN', 'S/').trim(); // Reemplaza "PEN" por "S/"
  }

}
