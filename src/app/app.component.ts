    import { Component, OnInit } from '@angular/core';
    import { Bill } from './bill/bill.model';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
    })
    export class AppComponent implements OnInit {
      bills: Bill[];
      total: string = '0';

      constructor() {
         this.bills = [];
      }

      resetTheValues(resetTitle, resetAmount): void{
        resetTitle.value = '';
        resetAmount.value = '';
      }

       addToAmount(newNumber: string, oldNumber: string ): string{
        const newNum: number = parseFloat(newNumber);
        const oldNum: number = parseFloat(oldNumber);
        const retNum: string = (oldNum + newNum).toFixed(2);
        return retNum;
    }

      submit(title: HTMLInputElement, amount: HTMLInputElement): void{
        const amountConverted: number = parseFloat(amount.value);
        this.bills.push(new Bill(title.value, amountConverted));
        const mutTotal = amountConverted.toString();
        this.resetTheValues(title, amount);
        this.total = this.addToAmount(mutTotal,  this.total);
      }
      ngOnInit(){

      }
    }
