import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs-compat';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';

import {DeadStockPurchaseService} from './dead-stock-purchase.service'

class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'app-dead-stock-purchase',
  templateUrl: './dead-stock-purchase.component.html',
  styleUrls: ['./dead-stock-purchase.component.scss']
})
export class DeadStockPurchaseComponent implements OnInit {

  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;

  formSubmitted = false;
   //api
   url = environment.base_url;

  // Formgroup variable
  angForm: FormGroup;

  // dropdown variables
  itemcode:any[];
  ngBranchCode:any=null
  ngtransactiondate:any=null
  branch_code: any[];
  schemeedit: any;

  // Date variables
  maxDate: Date;
  minDate: Date;
  ngbilldate:any=null
  ngchequedate:any=null

  isTransfer:boolean=false

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  dtExportButtonOptions: any = {};
  Accountno: any;
  accountedit: any;
  schemeACNo: any[];
  isCash: boolean;
  scheme: any[];
  narration: any;
  narrationList: any;
  // systemParameter: any;
  constructor(
    private fb: FormBuilder, private http: HttpClient,
    private systemParameter: SystemMasterParametersService,
    private deadstockpurchase: DeadStockPurchaseService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
  ) { 
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.getSystemParaDate()
    this.createForm()

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      this.ngBranchCode = data[0].value
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.scheme = data;
    })

    //Narration List
    this.deadstockpurchase.getNarrationMaster().subscribe(data => {
      this.narrationList = data;
    })
    

  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE:['',[Validators.required]],
      TRAN_DATE:[''],
      TRAN_YEAR:[''],
      ITEM_CODE:[''],
      SUPPLIER_NAME:['',[Validators.required,Validators.pattern]],
      BILL_NUM:['',[Validators.required,Validators.pattern]],
      BILL_DATE:['',[Validators.required]],
      DEAD_STOCK:[''],
      AC_TYPE:['',[Validators.required]],
      AC_NO:['',[Validators.required]],
      CHEQUE_DATE:['',[Validators.required]],
      CHEQUE_NUM:['',[Validators.required,Validators.pattern]],
      NARRATION:['',[Validators.required,Validators.pattern]],


    })
    

    
  }

  getBranch() {
   
    this.getIntroducer()
  }

  schemechange(event) {

    this.getschemename = event.name
    this.schemeedit = event.value
    this.getIntroducer()


  }

  // Accountnochange(event) {

  //   this.Accountno = event.value;
  //   this.accountedit = event.value


  // }

  obj: any
  getschemename: any
  //get account no according scheme for introducer
  getIntroducer() {


    

    this.obj = [this.schemeedit, this.ngBranchCode]


    switch (this.getschemename) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
        case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
        case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':

        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;

        })
        break;
        case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
        case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
        case 'GS':
        this.schemeAccountNoService.getAnamatSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
        case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':

        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;


        })
        break;
        case 'AG':
        this.schemeAccountNoService.getPigmyAgentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
        case 'IV':
        this.schemeAccountNoService.getInvestmentSchemeList1(this.obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
        case 'GL':
          this.schemeAccountNoService.getGeneralLedgerList1(this.obj).pipe(first()).subscribe(data => {
            this.schemeACNo = data;
          })
          break;
    }
  }

  addNewData() {
    // this.showButton = true;
    // this.updateShow = false;
    // this.newbtnShow = false;
    this.ngBranchCode = null
    this.schemeedit = null
    this.accountedit = null
    this.resetForm();
    
  }
//get sys para current date
getSystemParaDate() {
  this.systemParameter.getFormData(1).subscribe(data => {
    this.angForm.patchValue({
      'TRAN_DATE': data.CURRENT_DATE,

    })
    // var full = []
    var formatfullDate =data.CURRENT_DATE;
    var nyear = formatfullDate.split(/\//);
    let next= Number(nyear[2]) + 1 
    console.log(next)
    var transactionDate = nyear[2] + next
    this.angForm.patchValue({
          TRAN_YEAR: transactionDate
        })
        console.log(transactionDate)

  })
  
}
  // fromYear(){
  //   var full = []
  //   var fullYear =this.ngtransactiondate;
  //   full = fullYear.split(' ');
  //   var nyear = full[0].split(/\//);
  //   var transactionDate = nyear[2] + '/' 
  //   this.angForm.patchValue({
  //     TRAN_YEAR: transactionDate
  //   })
  // }

  //get Narration Details 
  getNarration(ele) {
    this.narration = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }

  isFormA(value) {
    if (value == 1) {
      this.isTransfer = true;
      this.isCash=false;
      this.angForm.controls['NARRATION'].reset()
    }
    if (value == 2) {
      this.isTransfer = false;
      this.isCash=true;
      this.angForm.controls['AC_TYPE'].reset()
      this.angForm.controls['AC_NO'].reset()
      this.angForm.controls['CHEQUE_DATE'].reset()
      this.angForm.controls['CHEQUE_NUM'].reset()
    }
    
  }

  // Reset Function
  resetForm() {
    this.createForm();
    
    this.ngBranchCode = null
    this.schemeedit = null
    this.accountedit = null
    
  }
  
  

}
