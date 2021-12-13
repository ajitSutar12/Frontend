import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-reports',
  templateUrl: './mis-reports.component.html',
  styleUrls: ['./mis-reports.component.scss']
})
 //for date 
export class MisReportsComponent implements OnInit {
 datemax: any;
   
  constructor() { 
              // this.datemax =new Date() ;
  // this.datemax = new Date().getFullYear()+'-'+("0"+new Date().getDate()).slice(-2)+'-'+("0"+(new Date().getMonth()+1)).slice(-2);
  this.datemax = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
  console.log(this.datemax);

  }

  ngOnInit(): void {
  }

}
