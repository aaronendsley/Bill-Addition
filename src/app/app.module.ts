import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { BudgetComponent } from './budget/budget.component';
import { BillFormComponent } from './bill-form/bill-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    BudgetComponent,
    BillFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
