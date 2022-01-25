import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-reports',
  templateUrl: './loan-reports.component.html',
  styleUrls: ['./loan-reports.component.scss']
})
export class LoanReportsComponent implements OnInit {
  
  num1:string;
  num2:string;
  result:number;
  add(){
  
    this.result== parseInt(this.num1) + parseInt(this.num2)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
