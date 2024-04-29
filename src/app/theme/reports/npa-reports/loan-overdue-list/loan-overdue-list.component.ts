import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-overdue-list',
  templateUrl: './loan-overdue-list.component.html',
  styleUrls: ['./loan-overdue-list.component.scss']
})
// export class LoanOverdueListComponent {

// }
export class LoanOverdueListComponent implements OnInit {

  loanoverdueTrue: boolean = true;
  accountwiseTrue: boolean = false;
  installmentwiseTrue: boolean = false;
  otherreceiveInstallTrue: boolean = false;
  citiwiselorTrue: boolean = false;
  recoveryClerkTrue: boolean = false;
  directorlorTrue: boolean = false;
  directorrecommendedTrue: boolean = false;
  duePeriodlTrue: boolean = false;
  loanduelistbetnTrue: boolean = false;
  loanduelistbetnTwoOpenTrue: boolean = false;
  lreceivedueTrue: boolean = false;
  recIntTrue: boolean = false;
  compareODTrue: boolean = false;
  ddrelODTrue: boolean = false;
  ddrelODPerfoTrue: boolean = false;
  schemeloanoverdueincredecre: boolean = false;
  duebalancesummary: boolean = false;
  clerkWiseRecoveryOverDueList: boolean = false;
  loanPeriodWiseAmountList: boolean = false;
  overDuePercentageSummaryReport: boolean = false;
  otherRecInstallWiseLoanOverdue: boolean = false;
  summaryperiodwiselist: boolean = false;
  directorAndDirectorsRelativesReport: boolean = false;
  cityWiseLoanOverdue:boolean=false;

  constructor(private_router: Router) { }

  ngOnInit(): void {
  }

  isShow: boolean = true
  isHide: boolean = true

  hideShow() {
    this.isShow = false
    this.isHide = true
  }
  hideShow1() {
    this.isShow = true
    this.isHide = false
  }

  OpenLink(val) {

    if (val == 1) {
      this.loanoverdueTrue = true;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
     
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
this.cityWiseLoanOverdue=false;


    }
    else if (val == 2) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = true;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
    
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 3) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = true;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
      
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 4) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = true;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
      
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 5) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = true;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
     
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 6) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = true;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
  
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 7) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = true;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
      
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 8) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = true;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
   
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 9) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = true;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
  
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 10) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = true;
      this.overDuePercentageSummaryReport = false;
  
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 11) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = true;
  
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 12) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;

      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
     
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = true;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;

    }

    else if (val == 13) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
      
      this.otherRecInstallWiseLoanOverdue = true;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;

    }

    ///////////////////////////////////
    else if (val == 14) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
    
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=false;


    }
    else if (val == 15) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;
      
      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = true;
      this.cityWiseLoanOverdue=false;

    }
    else if (val == 16) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.directorrecommendedTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.duebalancesummary = false;
      this.schemeloanoverdueincredecre = false;
      this.clerkWiseRecoveryOverDueList = false;
      this.loanPeriodWiseAmountList = false;
      this.overDuePercentageSummaryReport = false;

      this.otherRecInstallWiseLoanOverdue = false;
      this.summaryperiodwiselist = false;
      this.directorAndDirectorsRelativesReport = false;
      this.cityWiseLoanOverdue=true;
 
    }
    // else if (val == 16) {
    //   this.loanoverdueTrue = false;
    //   this.accountwiseTrue = false;
    //   this.installmentwiseTrue = false;
    //   this.otherreceiveInstallTrue = false;
    //   this.citiwiselorTrue = false;
    //   this.recoveryClerkTrue = false;
    //   this.directorlorTrue = false;
    //   this.directorrecommendedTrue = false;
    //   this.duePeriodlTrue = false;
    //   this.loanduelistbetnTrue = false;
    //   this.loanduelistbetnTwoOpenTrue = false;
    //   this.lreceivedueTrue = false;
    //   this.recIntTrue = false;
    //   this.compareODTrue = false;
    //   this.ddrelODTrue = false;
    //   this.ddrelODPerfoTrue = true;

    // }

  }


}