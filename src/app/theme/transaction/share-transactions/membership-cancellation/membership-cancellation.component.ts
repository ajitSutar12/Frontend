import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import { glMasterService } from '../../../../shared/elements/gl-master.service';
import { NgSelectComponent, NgSelectConfig } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import * as moment from 'moment';
@Component({
  selector: 'app-membership-cancellation',
  templateUrl: './membership-cancellation.component.html',
  styleUrls: ['./membership-cancellation.component.scss']
})
export class MembershipCancellationComponent implements OnInit {

  @ViewChild('triggerhide') triggerhide: ElementRef<HTMLElement>;
  @ViewChild('triggerhide1') triggerhide1: ElementRef<HTMLElement>;
  @ViewChild('narrationhide') narrationhide: ElementRef<HTMLElement>;

  angForm: FormGroup

  url = environment.base_url;


  newbtnShow: boolean = true;
  jointShowButton: boolean = true;
  jointUpdateShow: boolean = false;


  selectedBranch
  branchOption: any;
  scheme
  schemeCode
  schemeType: string = 'SH'
  obj: any;
  Scheme: any;


  maxDate: any;
  minDate: Date;
  type: any;
  ngIntroducer: any = null
  introducerACNo
  schemeACNo
  bankacno

  debitcredit
  selectedScheme: any = null

  particulars: any;


  multigrid = []
  values = [
    { id: 1, name: 'CREDIT' },
    { id: 2, name: 'DEBIT' },
  ];


  amount:any;
  ngFnarration: any = null




  // formSubmitted = false;
  // //api 
  // url = environment.base_url;

  // // Created Form Group
  // angForm: FormGroup;

  // schemeCode:any=null
  // //Scheme type variable
  // schemeType: string = 'SH'
  // shareSchemeType

  // //Dropdown options
  // scheme //scheme code from schemast(S_ACNOTYPE)
  // memberNo
  // TRANSACTIONNo



  dtExportButtonOptions: any = {};
  isTransfer: boolean;
  intIndex: any;
  date: any;
  multigrid1 = new Array();
  totalCredit: any=0;
  totalDebit: any=0;
  transferTotalAmount: any=0;
  
  narrationList: any;
  particularss: any;
  


  constructor(
    private http: HttpClient,
     
    private fb: FormBuilder,
    public glMasterService: glMasterService,
    private config: NgSelectConfig,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeAccountNoService: SchemeAccountNoService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,) 
    
    
    {this.systemParameter.getFormData(1).subscribe(data => {
      this.maxDate = moment(data.CURRENT_DATE, 'DD/MM/YYYY')
      this.maxDate = this.maxDate._d
    }) }
  showButton: boolean = true;
  updateShow: boolean = false;

  isCash: boolean = true;

  





  ngOnInit(): void {
    this.createForm()


    let user = JSON.parse(localStorage.getItem('user'));
    this.type = 'tranfer';
    // this.tranModeList = this.TranModeCash;

    //BranchCode Dropdown
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      this.selectedBranch = user.branchId;
    })



    this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
      this.scheme = data
      this.schemeCode = data[0].value
      this.getIntroducer()
    })
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      this.Scheme = data
    });

    this.http.get(this.url + '/narration').subscribe(data => {
   
      this.narrationList = data
    });
   


  }


  getNarration(ele) {
    this.particulars = ele;
    let el: HTMLElement = this.triggerhide.nativeElement;
    el.click();
  }
 
  
  getFormNarration(ele) {
    this.ngFnarration = ele;
    let el: HTMLElement = this.narrationhide.nativeElement;
    el.click();
  }

  onfocus(ele: NgSelectComponent){
    ele.open()
    console.log(ele);
  }
  onopen(select: NgSelectComponent){
    select.open()
  }
  onClose(select: NgSelectComponent){
    select.close()
  }

  getIntroducer() {
    debugger
    this.obj = [this.schemeCode, this.selectedBranch]


    this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
      this.introducerACNo = data;
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      branchOption: ['', [Validators.required]],
      AC_TYPE: ['', [Validators.required]],
      AC_TYPE1: ['', [Validators.required]],
      ChequeDate: ['', [Validators.required]],
      MEMBER_CODE1: ['', [Validators.required]],
      MCDATE: ['', [Validators.required]],
      RDATE: ['', [Validators.required]],
      MDATE: ['', [Validators.required]],
      amt: ['', [Validators.required]],
      ATA: ['', [Validators.required]],
      particulars: ['', [Validators.required]],
      RESOLUTIONNO: ['', [Validators.required]],
      Tscheme: ['', [Validators.required]],
      TschemeAC: ['', [Validators.required]],
      particularss: ['', [Validators.required]],
      type: ['cash'],
      amount: ['', [Validators.pattern]],
      DEBIT_CREDIT: ['', [Validators.required]],
      T_DEBIT: ['', [Validators.required]],
      T_CREDIT: ['', [Validators.required]],
      Fnarration: ['', [Validators.required]],
    })
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['branchOption'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.angForm.controls['branchOption'].disable()
      this.angForm.patchValue({
        'branchOption': result.branch.id
      })
      this.selectedBranch = result.branch.id
    }
  }
  runTimer() {

  }

  isFormA(value) {
    if (value == 1) {
      this.isTransfer = false
    }
    if (value == 2) {
      this.isTransfer = true
    }
  }
  transferSchemeDetails
  ngacno: any = null
  transferAccountDetails

  selectedTransScheme: any = null



  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.obj = [this.selectedTransScheme, this.selectedBranch]
    this.ngacno = null
    switch (event.name) {
      case 'SB':
        this.schemeAccountNoService.getSavingSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CA':
        this.schemeAccountNoService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'TD':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'PG':
        this.schemeAccountNoService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;

      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
          this.schemeACNo = data;
        })
        break;
    }
  }
  getTransferAccountDeatil(event) {
    this.transferAccountDetails = event
  }
  getMemberDetail(event){
    console.log(event.openDate,'eve')
    this.angForm.patchValue({
      MDATE: event.openDate 
    })
    console.log(this.angForm.value,'form value')
  }



  decimalAllContent($event) {
    // let value = Number($event.target.value);
    //   let data = value.toFixed(2);
    //   $event.target.value = data;
    
      var t = $event.target.value;
      $event.target.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
      this.angForm.patchValue({
        amount:$event.target.value
      })
  }

  


  addTransferAccount() {
    const formVal = this.angForm.value;
    debugger
    var object =
    {
      Tscheme: formVal.Tscheme,
      TschemeAC: formVal.TschemeAC,
      amount: formVal.amount,
      DEBIT_CREDIT: formVal.DEBIT_CREDIT,
      
      // DEBIT: formVal.type,
      particularss: formVal.particularss,
      type: formVal.type
    }

   
   
    if (formVal.Tscheme == "" || formVal.Tscheme == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
    }
     else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "info"
      );
    }
   
   
    else if (formVal.particularss == "" || formVal.particularss == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Particulars!",
        "info"
      );
    }
    else if (formVal.DEBIT_CREDIT == "" || formVal.DEBIT_CREDIT == null) {
      Swal.fire(
        "Warning!", "Please Select Debit or Credit Option!", "error"
      );
    }
    else if (formVal.amount == "" || formVal.amount == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Transfer Amount!",
        "info"
      );
    }else
    {
      if (formVal.DEBIT_CREDIT == 'CREDIT') {
        this.totalCredit = this.totalCredit + Number(formVal.amount)
      } else {
        this.totalDebit = this.totalDebit + Number(formVal.amount);
      }
    
      this.transferTotalAmount = this.transferTotalAmount + Number(formVal.amount)
    
      this.multigrid.push(object);
      this.resetForm();
    }
  


    
    
  }
  

  editTransferAccount(indexOfelement) {

    this.intIndex = indexOfelement;
    // this.intID = this.multiField[id].SR_NO;
    this.jointShowButton = false;
    this.jointUpdateShow = true;
    this.angForm.patchValue({




      // SR_NO: this.multiField[id].SR_NO,
      Tscheme: this.multigrid[indexOfelement].Tscheme,
      TschemeAC: this.multigrid[indexOfelement].TschemeAC,
      amount: this.multigrid[indexOfelement].amount,
      DEBIT_CREDIT: this.multigrid[indexOfelement].DEBIT_CREDIT,
      TRANSFER_ACNO: this.multigrid[indexOfelement].TRANSFER_ACNO,
      DEBIT: this.multigrid[indexOfelement].DEBIT,
      particularss: this.multigrid[indexOfelement].particularss,
      T_SHARES_AMOUNT: this.multigrid[indexOfelement].T_SHARES_AMOUNT,




    })
  }

  updateTransferAcccount() {
    let index = this.intIndex;

    const formVal = this.angForm.value;
    var object = {

      Tscheme: formVal.Tscheme,
      TschemeAC: formVal.TschemeAC,
      amount: formVal.amount,
      DEBIT_CREDIT: formVal.DEBIT_CREDIT,
      TRANSFER_ACNO: formVal.TRANSFER_ACNO,
      DEBIT: formVal.DEBIT,
      particularss: formVal.particularss,
      type: formVal.type


    }
    this.multigrid[index] = object;
    this.jointShowButton = true;
    this.jointUpdateShow = false;
    this.resetForm();

  }

  resetForm() {

   
    this.angForm.controls['particularss'].reset()
    this.angForm.controls['type'].reset()
    this.angForm.controls['Tscheme'].reset()
    this.angForm.controls['TschemeAC'].reset()
    this.angForm.controls['amount'].reset()
    this.angForm.controls['DEBIT_CREDIT'].reset()



  }


  resetForm1() {
     this.angForm.controls['branchOption'].reset()
    this.angForm.controls['AC_TYPE'].reset()
    this.angForm.controls['AC_TYPE1'].reset()
    this.angForm.controls['ChequeDate'].reset()
    this.angForm.controls['MEMBER_CODE1'].reset()
    this.angForm.controls['MCDATE'].reset()
    this.angForm.controls['RDATE'].reset()
    this.angForm.controls['MDATE'].reset()
    this.angForm.controls['amt'].reset()
    this.angForm.controls['ATA'].reset()
    this.angForm.controls['particulars'].reset()
    this.angForm.controls['RESOLUTIONNO'].reset()

  }







  submit() {
    const formVal = this.angForm.value;
    var object =
    {
      branchOption: formVal.branchOption,
      AC_TYPE: formVal.AC_TYPE,
      AC_TYPE1: formVal.AC_TYPE1,
      ChequeDate: formVal.ChequeDate,
      MEMBER_CODE1: formVal.MEMBER_CODE1,
      MCDATE: formVal.MCDATE,
      RDATE: formVal.RDATE,
      MDATE: formVal.MDATE,
      amt: formVal.amt,
      ATA: formVal.ATA,
      particulars: formVal.particulars,
      RESOLUTIONNO: formVal.RESOLUTIONNO,
      Tscheme: formVal.Tscheme,
      TschemeAC: formVal.TschemeAC,
      amount: formVal.amount,
      DEBIT_CREDIT: formVal.DEBIT_CREDIT,
      DEBIT: formVal.type,
      particularss: formVal.particularss,
      type: formVal.type
    }
    if (formVal.branchOption == "" || formVal.branchOption == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
    }
     else if (formVal.AC_TYPE == "" || formVal.AC_TYPE == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "info"
      );
    }
   
   
    else if (formVal.AC_TYPE1 == "" || formVal.AC_TYPE1 == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Particulars!",
        "info"
      );
    }
    else if (formVal.ChequeDate == "" || formVal.ChequeDate == null) {
      Swal.fire(
        "Warning!", "Please Select Debit and Credit!", "error"
      );
    }
    else if (formVal.MEMBER_CODE1 == "" || formVal.MEMBER_CODE1 == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Amount!",
        "info"
      );
    }
    else if (formVal.MCDATE== "" || formVal.MCDATE == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "info"
      );
    }
   
   
    else if (formVal.RDATE == "" || formVal.RDATE == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Particulars!",
        "info"
      );
    }
    else if (formVal.MDATE == "" || formVal.MDATE == null) {
      Swal.fire(
        "Warning!", "Please Select Debit and Credit!", "error"
      );
    }
    else if (formVal.amt == "" || formVal.amt == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Amount!",
        "info"
      );
    }
    
    else if (formVal.ATA == "" || formVal.ATA == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
    }
     else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "info"
      );
    }
   
   
    // else if (formVal.particulars == "" || formVal.particulars == null) {
    //   Swal.fire(
    //     "Warning!",
    //     "Please Insert Particulars!",
    //     "info"
    //   );
    // }
    else if (formVal.RESOLUTIONNO == "" || formVal.RESOLUTIONNO == null) {
      Swal.fire(
        "Warning!", "Please Select Debit and Credit!", "error"
      );

    }
  
    else if (formVal.Tscheme == "" || formVal.Tscheme == null) {
      Swal.fire("Warning!", "Please Select Scheme!", "error");
    }
     else if (formVal.TschemeAC == "" || formVal.TschemeAC == null) {
      Swal.fire(
        "Warning!",
        "Please Select Account!",
        "info"
      );
    }
   
   
    else if (formVal.particularss == "" || formVal.particularss == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Particulars!",
        "info"
      );
    }
    else if (formVal.DEBIT_CREDIT == "" || formVal.DEBIT_CREDIT == null) {
      Swal.fire(
        "Warning!", "Please Select Debit and Credit!", "error"
      );
    }
    else if (formVal.amount == "" || formVal.amount == null) {
      Swal.fire(
        "Warning!",
        "Please Insert Amount!",
        "info"
      );
    }else
    {
      this.multigrid1.push(object);
    Swal.fire(
      "Data Submitted Successfully!!"
    );
    console.log(object);
      
    }
  

    
  }











}
