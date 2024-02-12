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


  constructor(private_router: Router) { }

  ngOnInit(): void {
  }

  OpenLink(val) {

    if (val == 1) {
      this.loanoverdueTrue = true;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.otherreceiveInstallTrue = false;
      this.citiwiselorTrue = false;
      this.recoveryClerkTrue = false;
      this.directorlorTrue = false;
      this.directorrecommendedTrue = false;
      this.duePeriodlTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.lreceivedueTrue = false;
      this.recIntTrue = false;
      this.compareODTrue = false;
      this.ddrelODTrue = false;
      this.ddrelODPerfoTrue = false;

    }
    else if (val == 2) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = true;
      this.installmentwiseTrue = false;
      this.otherreceiveInstallTrue = false;
      this.citiwiselorTrue = false;
      this.recoveryClerkTrue = false;
      this.directorlorTrue = false;
      this.directorrecommendedTrue = false;
      this.duePeriodlTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.lreceivedueTrue = false;
      this.recIntTrue = false;
      this.compareODTrue = false;
      this.ddrelODTrue = false;
      this.ddrelODPerfoTrue = false;

    }
    else if (val == 3) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = true;
      this.otherreceiveInstallTrue = false;
      this.citiwiselorTrue = false;
      this.recoveryClerkTrue = false;
      this.directorlorTrue = false;
      this.directorrecommendedTrue = false;
      this.duePeriodlTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.lreceivedueTrue = false;
      this.recIntTrue = false;
      this.compareODTrue = false;
      this.ddrelODTrue = false;
      this.ddrelODPerfoTrue = false;

    }
    else if (val == 4) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.otherreceiveInstallTrue = true;
      this.citiwiselorTrue = false;
      this.recoveryClerkTrue = false;
      this.directorlorTrue = false;
      this.directorrecommendedTrue = false;
      this.duePeriodlTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.lreceivedueTrue = false;
      this.recIntTrue = false;
      this.compareODTrue = false;
      this.ddrelODTrue = false;
      this.ddrelODPerfoTrue = false;

    }
    else if (val == 5) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.otherreceiveInstallTrue = false;
      this.citiwiselorTrue = true;
      this.recoveryClerkTrue = false;
      this.directorlorTrue = false;
      this.directorrecommendedTrue = false;
      this.duePeriodlTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.lreceivedueTrue = false;
      this.recIntTrue = false;
      this.compareODTrue = false;
      this.ddrelODTrue = false;
      this.ddrelODPerfoTrue = false;

    }
    else if (val == 6) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.otherreceiveInstallTrue = false;
      this.citiwiselorTrue = false;
      this.recoveryClerkTrue = true;
      this.directorlorTrue = false;
      this.directorrecommendedTrue = false;
      this.duePeriodlTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = false;
      this.lreceivedueTrue = false;
      this.recIntTrue = false;
      this.compareODTrue = false;
      this.ddrelODTrue = false;
      this.ddrelODPerfoTrue = false;

    }
    // else if (val == 7) {
    //   this.loanoverdueTrue = false;
    //   this.accountwiseTrue = false;
    //   this.installmentwiseTrue = false;
    //   this.otherreceiveInstallTrue = false;
    //   this.citiwiselorTrue = false;
    //   this.recoveryClerkTrue = false;
    //   this.directorlorTrue = true;
    //   this.directorrecommendedTrue = false;
    //   this.duePeriodlTrue = false;
    //   this.loanduelistbetnTrue = false;
    //   this.loanduelistbetnTwoOpenTrue = false;
    //   this.lreceivedueTrue = false;
    //   this.recIntTrue = false;
    //   this.compareODTrue = false;
    //   this.ddrelODTrue = false;
    //   this.ddrelODPerfoTrue = false;

    // }
    // else if (val == 8) {
    //   this.loanoverdueTrue = false;
    //   this.accountwiseTrue = false;
    //   this.installmentwiseTrue = false;
    //   this.otherreceiveInstallTrue = false;
    //   this.citiwiselorTrue = false;
    //   this.recoveryClerkTrue = false;
    //   this.directorlorTrue = false;
    //   this.directorrecommendedTrue = true;
    //   this.duePeriodlTrue = false;
    //   this.loanduelistbetnTrue = false;
    //   this.loanduelistbetnTwoOpenTrue = false;
    //   this.lreceivedueTrue = false;
    //   this.recIntTrue = false;
    //   this.compareODTrue = false;
    //   this.ddrelODTrue = false;
    //   this.ddrelODPerfoTrue = false;

    // }
    // else if (val == 9) {
    //   this.loanoverdueTrue = false;
    //   this.accountwiseTrue = false;
    //   this.installmentwiseTrue = false;
    //   this.otherreceiveInstallTrue = false;
    //   this.citiwiselorTrue = false;
    //   this.recoveryClerkTrue = false;
    //   this.directorlorTrue = false;
    //   this.directorrecommendedTrue = false;
    //   this.duePeriodlTrue = true;
    //   this.loanduelistbetnTrue = false;
    //   this.loanduelistbetnTwoOpenTrue = false;
    //   this.lreceivedueTrue = false;
    //   this.recIntTrue = false;
    //   this.compareODTrue = false;
    //   this.ddrelODTrue = false;
    //   this.ddrelODPerfoTrue = false;

    // }
    else if (val == 10) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.otherreceiveInstallTrue = false;
      this.citiwiselorTrue = false;
      this.recoveryClerkTrue = false;
      this.directorlorTrue = false;
      this.directorrecommendedTrue = false;
      this.duePeriodlTrue = false;
      this.loanduelistbetnTrue = true;
      this.loanduelistbetnTwoOpenTrue = false;
      this.lreceivedueTrue = false;
      this.recIntTrue = false;
      this.compareODTrue = false;
      this.ddrelODTrue = false;
      this.ddrelODPerfoTrue = false;
    }
    else if (val == 11) {
      this.loanoverdueTrue = false;
      this.accountwiseTrue = false;
      this.installmentwiseTrue = false;
      this.otherreceiveInstallTrue = false;
      this.citiwiselorTrue = false;
      this.recoveryClerkTrue = false;
      this.directorlorTrue = false;
      this.directorrecommendedTrue = false;
      this.duePeriodlTrue = false;
      this.loanduelistbetnTrue = false;
      this.loanduelistbetnTwoOpenTrue = true;
      this.lreceivedueTrue = false;
      this.recIntTrue = false;
      this.compareODTrue = false;
      this.ddrelODTrue = false;
      this.ddrelODPerfoTrue = false;

    }
    // else if (val == 12) {
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
    //   this.lreceivedueTrue = true;
    //   this.recIntTrue = false;
    //   this.compareODTrue = false;
    //   this.ddrelODTrue = false;
    //   this.ddrelODPerfoTrue = false;

    // }
    // else if (val == 13) {
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
    //   this.recIntTrue = true;
    //   this.compareODTrue = false;
    //   this.ddrelODTrue = false;
    //   this.ddrelODPerfoTrue = false;

    // }
    // else if (val == 14) {
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
    //   this.compareODTrue = true;
    //   this.ddrelODTrue = false;
    //   this.ddrelODPerfoTrue = false;

    // }
    // else if (val == 15) {
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
    //   this.ddrelODTrue = true;
    //   this.ddrelODPerfoTrue = false;

    // }
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
