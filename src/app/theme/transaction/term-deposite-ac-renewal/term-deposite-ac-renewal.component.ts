import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import * as moment from 'moment';

@Component({
  selector: 'app-term-deposite-ac-renewal',
  templateUrl: './term-deposite-ac-renewal.component.html',
  styleUrls: ['./term-deposite-ac-renewal.component.scss']
})
export class TermDepositeAcRenewalComponent implements OnInit {
  @Input() childMessage: string;
  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;


  selectedBranch: any;
  selectedCode: any;
  selectedScheme: any;
  customer: any;
  angForm: FormGroup;

  date: any;
  branch_code: any;
  introducerACNo
  obj: any
  allScheme = new Array()//from schme master
  master: any;
  allSchemeCode: any//from schme master
  isture: boolean = true;

  NormalCheck:boolean = true;
  transferShowNormal:boolean = false;
  payableTranferShow:boolean = false;
  InterestDate : any;
  current_date : any;

  DatatableHideShow: boolean = true;
  rejectShow: boolean = false;
  approveShow: boolean = false;

  constructor(private fb: FormBuilder,
    private multiService: MultiVoucherService,
    private ownbranchMasterService: OwnbranchMasterService,
    private savingMasterService: SavingMasterService,
    private Multiservice: MultiVoucherService,
  ) { 
    if (this.childMessage != undefined) {

      this.editClickHandler(this.childMessage);
    }
  }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      branch_code: [''],
      date: [''],
      scheme_type: [''],
      scheme: [''],
      account_no: [''],
      NormalInt:[''],
      IntUpto:[''],
      NormalIntRadio:[''],
      PayableCheck:[''],
      new_matu_date:[''],
      new_maturity_amt:[''],
      new_last_date:[''],
      new_rate:[''],
      new_deposit:[''],
      new_receipt:[''],
      new_day:[''],
      new_month:[''],
      new_ason_date:[''],
      new_category:[''],
      renewal_tran_no:[''],
      payable_account_no:[''],
      payable_scheme:[''],
      payable_scheme_type:[''],
      PayableIntRadio:[''],
      payableCheck:[''],
      normal_account_no:['']
    })
    let user = JSON.parse(localStorage.getItem('user'));

    this.current_date = user.branch.syspara.CURRENT_DATE;
    console.log(this.current_date);

    //get syspara details
    this.multiService.getSysParaData().subscribe(data => {
      debugger
      // this.date =  moment(data[0].CURRENT_DATE).format('DD/MM/YYYY');
      this.date = data[0].CURRENT_DATE;
    })

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.selectedBranch = user.branchId;
    })

    //Scheme Code
    this.Multiservice.getSchemeCodeList().subscribe(data => {
      this.master = data;
      this.allSchemeCode = [...new Map(data.map(item => [item['S_ACNOTYPE'], item])).values()]
      this.selectedCode = 'TD';
      this.selectedSchemeCode()
    })
  }

  //Customer change function
  getVoucherData() {
    console.log(this.customer);
  }

  //get account no according scheme for introducer
  getIntroducer() {
    this.introducerACNo = [];
    this.obj = [this.selectedScheme.id, this.selectedBranch]
    switch (this.selectedCode) {
      case 'SB':
        this.savingMasterService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'SH':
        this.savingMasterService.getShareSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CA':
        this.savingMasterService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'LN':
        this.savingMasterService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'TD':
        this.savingMasterService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          debugger
          this.introducerACNo = data;
          console.log(this.introducerACNo);
        })
        break;

      case 'DS':
        this.savingMasterService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'CC':
        this.savingMasterService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'GS':
        this.savingMasterService.getAnamatSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'PG':
        this.savingMasterService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'AG':
        this.savingMasterService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;

      case 'IV':
        this.savingMasterService.getInvestmentSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
        })
        break;
    }
  }

  selectedSchemeCode() {
    this.allScheme = [];
    this.master.forEach(element => {
      if (element.S_ACNOTYPE == this.selectedCode) {
        this.allScheme.push(element)
      }
    });
  }
  editClickHandler(id) {}

  changeNormal(ele){
    if(ele.target.value == 'transfer'){
      this.transferShowNormal = true;
    }else{
      this.transferShowNormal = false;
    }
  }

  normalCheck(ele){
    if(ele.target.checked){
      this.NormalCheck = false;
      this.InterestDate = this.current_date;
    }
  }

  PayableCheck:boolean = true;
  payableInt(ele){
    if(ele.target.checked){
      this.PayableCheck = false;
    }
  }

  payableStatus(ele){
    if(ele.target.value == 'transfer'){
      this.payableTranferShow = true;
    }else{
      this.payableTranferShow = false;
    }
  }
}
