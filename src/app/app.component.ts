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

      submit(title: HTMLInputElement, amount: HTMLInputElement): boolean{
        console.log(`submitted ${title.value} and ${amount.value}`);
        const amountConverted: number = parseFloat(amount.value);
        const convertedTotal: number = parseFloat(this.total);
        const newValue: string = (amountConverted + convertedTotal).toFixed(2);
        this.bills.push(new Bill(title.value, amountConverted));
        title.value = '';
        amount.value = '';
        this.total = newValue;
        return false;
      }
      ngOnInit(){

      }
    }
