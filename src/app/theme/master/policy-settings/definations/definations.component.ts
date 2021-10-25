import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-definations',
  templateUrl: './definations.component.html',
  styleUrls: ['./definations.component.scss']
})
export class DefinationsComponent implements OnInit {
  interestrateftdTrue: boolean = true;
  termdepositpsTrue: boolean = false;
  interestrateforsapdTrue: boolean = false;
  interestrateforlaccTrue: boolean = false;
  securitycodeTrue : boolean= false;
  managerviewglpTrue : boolean= false;
  schemelinkingwdTrue: boolean = false;
  schemetypecdTrue : boolean= false;
  depreciationrmTrue : boolean= false;
  prematurepigmylirTrue: boolean = false;
  tdsinterestrateTrue: boolean = false;
  sizeslabwarTrue: boolean = false;


  constructor(private_router: Router) {
  }
  ngOnInit(): void {
  }

  OpenLink(val) {
    // debugger
    if (val == 1) {
      this.interestrateftdTrue = true;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;
    }
    if (val == 2) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = true;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;
    }
    if (val == 3) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = true;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;

    }
    if (val == 4) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = true;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;

    }
    if (val == 5) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = true;

    }
    if (val == 6) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = true;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;

    }
    if (val == 7) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = true;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;

    }
    if (val == 8) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = true;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;

    }
    if (val == 9) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = true;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;

    }
    if (val == 10) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = true;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;

    }
    if (val == 11) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = true;
      this.tdsinterestrateTrue = false;
      this.sizeslabwarTrue = false;

    }
    if (val == 12) {
      this.interestrateftdTrue = false;
      this.termdepositpsTrue = false;
      this.interestrateforsapdTrue = false;
      this.interestrateforlaccTrue = false;
      this.securitycodeTrue = false;
      this.managerviewglpTrue = false;
      this.schemelinkingwdTrue = false;
      this.schemetypecdTrue = false;
      this.depreciationrmTrue = false;
      this.prematurepigmylirTrue = false;
      this.tdsinterestrateTrue = true;
      this.sizeslabwarTrue = false;

    }
   

  }
}