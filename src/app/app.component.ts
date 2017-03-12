    import {
        Component
    } from '@angular/core';
    import {
        Bill
    } from './bill/bill.model';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        bills: Bill[];
        total = '0';
        InputVal: string;
        budget = 0;
        budgetStringifyed: string;
        budgetSubmit = false;
        billTitle: string;
        billAmount: number;



        constructor() {
            this.bills = [];
            console.log(this.budget);
        }

      
        changeBudgetToAString(budgetValue: number) {
            this.budgetStringifyed = budgetValue.toFixed(2);
        }
        getBudgetValue(value: number) {
            if (isNaN(value)) {
                this.InputVal = 'Please Enter Number for your budget amount';
            } else {
                this.budget = value;
                this.changeBudgetToAString(this.budget);
                this.InputVal = '';
                this.budgetSubmit = true;
            }
        }
        addToAmount(newNumber: string, oldNumber: string): string {
            const newNum: number = parseFloat(newNumber);
            const oldNum: number = parseFloat(oldNumber);
            const retNum: string = (oldNum + newNum).toFixed(2);
            return retNum;
        }

        amountMinusBudget(amountToSub: number) {
            const amountToSubtract = amountToSub;
            this.budget = this.budget - amountToSubtract;
            this.changeBudgetToAString(this.budget);
        }

        checkTheInputAndPush(Input1: string, Input2: number): boolean {
            if (!Input1 && !Input2) {
                this.InputVal = 'Please Enter a Bill Name and an Amount of your Bill';
            } else if (!Input1) {
                this.InputVal = 'Please Enter a Bill Name';
            } else if (isNaN(Input2)) {
                this.InputVal = 'Please Enter a Number Amount';
            } else {
                this.InputVal = '';
                this.bills.push(new Bill(Input1, Input2));
                const mutTotal = Input2.toString();
                this.total = this.addToAmount(mutTotal, this.total);
                return true;
            }

        }

        submitTheBill(value: string[]) {
            const passedBill = value;
            const amountConverted: number = parseFloat(passedBill[1]);
            if (this.checkTheInputAndPush(passedBill[0], amountConverted)) {
                this.amountMinusBudget(amountConverted);
            }
        }

    }
