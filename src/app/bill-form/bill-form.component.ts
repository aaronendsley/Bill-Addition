import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent{
@Output() submit = new EventEmitter();


submitTheBills(Input1: HTMLInputElement, Input2: HTMLInputElement){
  const amountFilteredForCommas: string = this.filterForCommas(Input2.value);
  const billArray: string[] = [Input1.value, amountFilteredForCommas];
  this.submit.emit(billArray);
  this.resetTheValues(Input1, Input2);
};
  resetTheValues(resetTitle, resetAmount): void {
            resetTitle.value = '';
            resetAmount.value = '';
        }

filterForCommas(input: string){
    const arrayWithCommas = input.split('');
    const stringWithNoCommas = arrayWithCommas.filter(function(value){
        return value !== ',';
    }).join('');
    return stringWithNoCommas;
  }
}
