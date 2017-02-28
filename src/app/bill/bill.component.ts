import { Component, Input, OnInit } from '@angular/core';
import { Bill } from './bill.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  @Input() bills: Bill;





  ngOnInit() {
  }

}
