import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-scheme-parameters',
  templateUrl: './scheme-parameters.component.html',
  styleUrls: ['./scheme-parameters.component.scss']
})
export class SchemeParametersComponent implements OnInit {

  systemmasterparametersTrue = true;
  smssettingTrue = false;
  recoverysequenceTrue = false;
  schemetypesettingTrue = false;
  transactioninputglhsTrue = false;
  checkcollectionihTrue = false;
  otherbankdsTrue = false;
  lockerschemeTrue = false;
  generalledgersTrue = false;
  anamatgeneralsubTrue = false;
  sharesschemeTrue = false;
  savingsschemeTrue = false;
  currentscheme = false;
  termdepositscheme = false;
  cashcreditscheme = false;
  termloanscheme = false;
  disputeloans = false;
  pigmyacscheme = false;
  pigmyagentscheme = false;
  payrollsettings = false;


  constructor(private_router: Router,private translate:TranslateService) {this.translate.setDefaultLang(environment.setLang);
  }
  ngOnInit(): void {
  }

  OpenLink(val) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // 
    if (val == 1) {
      this.systemmasterparametersTrue = true;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;
    }
    if (val == 2) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = true;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;
    }
    if (val == 3) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = true;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 4) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = true;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 5) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = true;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 6) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = true;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;
    }
    if (val == 7) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = true;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 8) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = true;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 9) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = true;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 10) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = true;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 11) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = true;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 12) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = true;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;
    }
    if (val == 13) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = true;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 14) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = true;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;

    }
    if (val == 15) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = true;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;
    }
    if (val == 16) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = true;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;
    }
    if (val == 17) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = true;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;
    }
    if (val == 18) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = true;
      this.pigmyagentscheme = false;
      this.payrollsettings = false;
    }
    if (val == 19) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = true;
      this.payrollsettings = false;
    }
    if (val == 20) {
      this.systemmasterparametersTrue = false;
      this.smssettingTrue = false;
      this.recoverysequenceTrue = false;
      this.schemetypesettingTrue = false;
      this.transactioninputglhsTrue = false;
      this.checkcollectionihTrue = false;
      this.otherbankdsTrue = false;
      this.lockerschemeTrue = false;
      this.generalledgersTrue = false;
      this.anamatgeneralsubTrue = false;
      this.sharesschemeTrue = false;
      this.savingsschemeTrue = false;
      this.currentscheme = false;
      this.termdepositscheme = false;
      this.cashcreditscheme = false;
      this.termloanscheme = false;
      this.disputeloans = false;
      this.pigmyacscheme = false;
      this.pigmyagentscheme = false;
      this.payrollsettings = true;
    }
  }
  selectLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
