import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-book',
  templateUrl: './balance-book.component.html',
  styleUrls: ['./balance-book.component.scss']
})
export class BalanceBookComponent implements OnInit {
  multiNominee = [];
  angForm: any;
  showButton: boolean = true;
  constructor() { }

  ngOnInit(): void {

      // Method to insert data into database through NestJS
  // submit() {
  //   const formVal = this.angForm.value;
  //   const dataToSend = {
  //     // 'NomineeData': this.multiNominee,
  //   };
  // }
  }
  
  // n =  new Date();
  // y = n.getFullYear();
  // m = n.getMonth() + 1;
  // d = n.getDate();
  // document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

}
