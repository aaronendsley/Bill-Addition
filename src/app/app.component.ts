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
      InputVal: string;

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

      checkTheInputAndPush(Input1: string, Input2: number): boolean {
        if (!Input1 && !Input2 ){
            this.InputVal = 'Please Enter a Bill Name and an Amount of your Bill';
        }else if(!Input1){
          this.InputVal = 'Please Enter a Bill Name';
        }else if (isNaN(Input2)){
          this.InputVal = 'Please Enter a Number Amount';
        }else{
          this.InputVal = '';
          this.bills.push(new Bill(Input1, Input2));
          const mutTotal = Input2.toString();
          this.total = this.addToAmount(mutTotal,  this.total);
          return true;
        }

      }

      submit(title: HTMLInputElement, amount: HTMLInputElement): void{
        const amountConverted: number = parseFloat(amount.value);
        if (this.checkTheInputAndPush(title.value, amountConverted)) {;
        this.resetTheValues(title, amount);
        }
        }
      ngOnInit(){

      }
    }
