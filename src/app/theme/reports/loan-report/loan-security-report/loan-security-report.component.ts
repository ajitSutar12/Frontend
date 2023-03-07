import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loan-security-report',
  templateUrl: './loan-security-report.component.html',
  styleUrls: ['./loan-security-report.component.scss']
})
export class LoanSecurityReportComponent implements OnInit {
  url = environment.base_url;

  goldSilverSecTrue: boolean = true;
  // accountwiseTrue: boolean = false;
  // installmentwiseTrue: boolean = false;
  // otherreceiveInstallTrue: boolean = false;
  // citiwiselorTrue: boolean = false;
  // recoveryClerkTrue: boolean = false;
  // directorlorTrue: boolean = false;
  // directorrecommendedTrue: boolean = false;

  constructor(private_router: Router) { }

  ngOnInit(): void {
  }

  OpenLink(val) {
    // 
    if (val == 1) {
      this.goldSilverSecTrue = true;
      // this.accountwiseTrue = false;
      // this.installmentwiseTrue = false;
      // this.otherreceiveInstallTrue = false;
      // this.citiwiselorTrue = false;
      // this.recoveryClerkTrue = false;
      // this.directorlorTrue = false;
      // this.directorrecommendedTrue = false;
      

    }
    else if (val == 2) {
      this.goldSilverSecTrue = false;
      // this.accountwiseTrue = true;
      // this.installmentwiseTrue = false;
      // this.otherreceiveInstallTrue = false;
      // this.citiwiselorTrue = false;
      // this.recoveryClerkTrue = false;
      // this.directorlorTrue = false;
      // this.directorrecommendedTrue = false;
      

    }
  //   else if (val == 3) {
  //     this.goldSilverSecTrue = false;
  //     this.accountwiseTrue = false;
  //     this.installmentwiseTrue = true;
  //     this.otherreceiveInstallTrue = false;
  //     this.citiwiselorTrue = false;
  //     this.recoveryClerkTrue = false;
  //     this.directorlorTrue = false;
  //     this.directorrecommendedTrue = false;
      

  //   }
  //   else if (val == 4) {
  //     this.goldSilverSecTrue = false;
  //     this.accountwiseTrue = false;
  //     this.installmentwiseTrue = false;
  //     this.otherreceiveInstallTrue = true;
  //     this.citiwiselorTrue = false;
  //     this.recoveryClerkTrue = false;
  //     this.directorlorTrue = false;
  //     this.directorrecommendedTrue = false;
      

  //   }
  //   else if (val == 5) {
  //     this.goldSilverSecTrue = false;
  //     this.accountwiseTrue = false;
  //     this.installmentwiseTrue = false;
  //     this.otherreceiveInstallTrue = false;
  //     this.citiwiselorTrue = true;
  //     this.recoveryClerkTrue = false;
  //     this.directorlorTrue = false;
  //     this.directorrecommendedTrue = false;
      

  //   }
  //   else if (val == 6) {
  //     this.goldSilverSecTrue = false;
  //     this.accountwiseTrue = false;
  //     this.installmentwiseTrue = false;
  //     this.otherreceiveInstallTrue = false;
  //     this.citiwiselorTrue = false;
  //     this.recoveryClerkTrue = true;
  //     this.directorlorTrue = false;
  //     this.directorrecommendedTrue = false;
    

  //   }
  //   else if (val == 7) {
  //     this.goldSilverSecTrue = false;
  //     this.accountwiseTrue = false;
  //     this.installmentwiseTrue = false;
  //     this.otherreceiveInstallTrue = false;
  //     this.citiwiselorTrue = false;
  //     this.recoveryClerkTrue = false;
  //     this.directorlorTrue = true;
  //     this.directorrecommendedTrue = false;
     

  //   }
  //   else if (val == 8) {
  //     this.goldSilverSecTrue = false;
  //     this.accountwiseTrue = false;
  //     this.installmentwiseTrue = false;
  //     this.otherreceiveInstallTrue = false;
  //     this.citiwiselorTrue = false;
  //     this.recoveryClerkTrue = false;
  //     this.directorlorTrue = false;
  //     this.directorrecommendedTrue = true;
     

  //   }
  }
}
