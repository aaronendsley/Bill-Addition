import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  @Output() getBudget = new EventEmitter();
  
  clickButton(budget: HTMLInputElement){
    const thisBudget: number = parseFloat(budget.value);
    this.getBudget.emit(thisBudget);
  }
  constructor() { }

  ngOnInit() {
  }

}
