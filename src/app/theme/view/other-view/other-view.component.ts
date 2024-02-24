import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-other-view',
  templateUrl: './other-view.component.html',
  styleUrls: ['./other-view.component.scss']
})
export class OtherViewComponent implements OnInit {

  interestpaidhistoryTrue = true;
  chequebookdetailsTrue = false;
  unclearchequesTrue = false;
  loanprojectionTrue = false;
  loaninstallmentinquiryTrue = false;
  depositinterestprojectionTrue = false;
  ratioanalysisTrue = false;
  depositloananalysisTrue = false;
  budgetviewTrue = false;
  memberguarntorviewTrue = false;
  lockerviewTrue = false;
  graphloandepositpositionTrue = false;
  comaparitivegraphloandepositpositionTrue = false;
  cdratioanalysisTrue = false;


  constructor(private_router: Router,     private translate:TranslateService
    ) {
      this.translate.setDefaultLang(environment.setLang) ;

  }
  ngOnInit(): void {
  }

  OpenLink(val) {
    // 
    if (val == 1) {
      this.interestpaidhistoryTrue = true;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;
    }
    if (val == 2) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = true;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 3) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = true;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 4) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = true;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 5) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = true;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 6) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = true;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 7) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = true;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 8) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = true;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 9) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = true;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 10) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = true;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 11) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = true;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 12) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = true;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = false;

    }
    if (val == 13) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = true;
      this.cdratioanalysisTrue = false;

    }
    if (val == 14) {
      this.interestpaidhistoryTrue = false;
      this.chequebookdetailsTrue = false;
      this.unclearchequesTrue = false;
      this.loanprojectionTrue = false;
      this.loaninstallmentinquiryTrue = false;
      this.depositinterestprojectionTrue = false;
      this.ratioanalysisTrue = false;
      this.depositloananalysisTrue = false;
      this.budgetviewTrue = false;
      this.memberguarntorviewTrue = false;
      this.lockerviewTrue = false;
      this.graphloandepositpositionTrue = false;
      this.comaparitivegraphloandepositpositionTrue = false;
      this.cdratioanalysisTrue = true;

    }
  }

}
