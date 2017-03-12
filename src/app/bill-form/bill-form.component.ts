import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent{
@Output() submit = new EventEmitter();

submitTheBills(Input1: HTMLInputElement, Input2: HTMLInputElement){
  const billArray: string[] = [Input1.value, Input2.value];
  this.submit.emit(billArray);
  this.resetTheValues(Input1, Input2);
};
  resetTheValues(resetTitle, resetAmount): void {
            resetTitle.value = '';
            resetAmount.value = '';
        }
}
