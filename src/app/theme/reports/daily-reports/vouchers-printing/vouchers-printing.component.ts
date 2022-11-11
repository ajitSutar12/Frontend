import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";
import Swal from 'sweetalert2';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { VoucherEntryComponent } from 'src/app/theme/transaction/voucher-entry/voucher-entry.component';
import { MultiVoucherComponent } from 'src/app/theme/transaction/multi-voucher/multi-voucher.component';
import { data } from 'jquery';
import { VouchersPrintingService } from 'src/app/theme/reports/daily-reports/vouchers-printing/vouchers-printing.service'


@Component({
  selector: 'app-vouchers-printing',
  templateUrl: './vouchers-printing.component.html',
  styleUrls: ['./vouchers-printing.component.scss']
})
export class VouchersPrintingComponent implements OnInit {
  @ViewChild(VoucherEntryComponent) voucherchild: VoucherEntryComponent;
  @ViewChild(MultiVoucherComponent) multichild: MultiVoucherComponent;
  date: any;
getVoucherData: any;


defaultDate: any;
maxDate: any;
ngtrantype: any;
  dropdownData: any;
getIntro($event: any) {

}

formSubmitted = false;
ngForm: FormGroup;
bsValue = new Date();
ngvouchertype : any = null;

ngbranch: any = null
voucherno: any = null;
ngvoucherno: any = null;
branchOption: any[];
url = environment.base_url;
report_url = environment.report_url;

iframeurl: any = ' ';
showRepo: boolean = false;
showCheckbox1: boolean = true;
showCheckbox2: boolean = true;
clicked:boolean=false;
showLoading:boolean = false;
scheme: any;
schemeCode: any;
ngcheckbox1: boolean = false;
ngcheckbox2: boolean = false;
enableMe:boolean = false;
response=[];

voucherType: any=[ 
  { id: 1, name: 'Single Voucher', sname:'SV'},
  { id: 2, name: 'Multi Voucher', sname:'MV'},
  { id: 3, name: 'Batch Voucher', sname:'BV'},
  { id: 4, name: 'Interest Posting',sname:'IT'},
  { id: 5, name: 'Deposit Closing', sname:'DC' },
  { id: 6, name: 'Pigmy Chart', sname:'PC' },
  { id: 7, name: 'Interest Instruction Execution' },
  { id: 8, name: 'Pay Order', sname:'PO' },
  { id: 9, name: 'Demand Draft', sname:'DD' },
  { id: 10, name: 'IBC', sname:'IB' },
  { id: 11, name: 'Hundi',sname:'HD' },
  { id: 12, name: 'IBT', sname:'IBT' },
  { id: 13, name: 'Bills Discounting', sname:'BD' },
  { id: 14, name: 'Not Recallable' },
  { id: 15, name: 'Overdraft Interest Posting', sname:'OD' },
  { id: 16, name: 'Standing Instruction' },
];

trantype=[
  { id: 1, name: 'All', sname:'ALL' },
  { id: 1, name: 'Cash', sname:'CS' },
  { id: 1, name: 'Transfer', sname:'TR' },
];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter:SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private config: NgSelectConfig,
    private _service: VouchersPrintingService,
    public router: Router,
  ) { }

  ngOnInit(): void {

    this.createForm()

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.defaultDate = data.CURRENT_DATE;
    });

  }

  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      VOUCHER_TYPE: ["", [Validators.required]],
      FROM_DATE: ['', [Validators.required]],
      TRAN_TYPE: ['', [Validators.required]],
      VOUCHER_NO: ['', [Validators.required]],
      CHECKBOX1: ['', [Validators.required]],
      CHECKBOX2: ['', [Validators.required]],
      radio: new FormControl('both'),
    });

    let data: any = localStorage.getItem('user');
  let result = JSON.parse(data);
  if (result.RoleDefine[0].Role.id == 1) {
    this.ngbranch = result.branch.id
    this.ngForm.controls['BRANCH_CODE'].enable()
  }
  else {
    this.ngForm.controls['BRANCH_CODE'].disable()
    this.ngbranch = result.branch.id
  }
  }

  view(event) {
   
   this.showLoading = true;
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME;

  debugger
  // let Obj = {
  //   'branch': this.ngbranch,
  //   'date': this.defaultDate
  // }

  
  // updateCheckBox();{
  //   if(this.voucherType.ngvouchertype.name == 'Multi Voucher'){
  //     this.enableMe = true;
  //   }else{
  //     this.enableMe = false;
  //   }
  // }

  show(event);{
    // if(this.voucherType.values.name=="Multi Voucher" ){
    //   this.showCheckbox1 = true;
    //   this.showCheckbox2 = true;
    // }else{
    //   this.showCheckbox1 = false;
    //   this.showCheckbox2 = false;
    // }
    
    // if(this.ngForm.controls['VOUCHER_TYPE'].value=="Batch Voucher" ){
    //   this.showCheckbox1 = true;
    //   this.showCheckbox2 = true;
    // }else{
    //   this.showCheckbox1 = false;
    //   this.showCheckbox2 = false;
    // }

    // if(this.ngForm.controls['VOUCHER_TYPE'].value=="IBT"){
    //   this.showCheckbox1 = true;
    //   this.showCheckbox2 = true;
    // }else{
    //   this.showCheckbox1 = false;
    //   this.showCheckbox2 = false;
    // }
  }

  getVoucherData(event); {
  let Obj = {
    date: this.defaultDate,
    branch : this.ngbranch,
    type: this.ngtrantype,
    TRAN_SOURCE_TYPE: this.ngvouchertype
  }
  this._service.getTranNo(Obj).subscribe(data => {
    this.response = data
    // this.dropdownData = data; 
    // console.log(data);
  })
}

    if(this.ngForm.valid){
      let obj = this.ngForm.value
      this.showRepo = true;
  let date = moment(obj.FROM_DATE).format('DD/MM/YYYY');
  var sdate = moment(obj.FROM_DATE).subtract(1, "day").format('DD/MM/YYYY'); 
  let voucher_type = obj.VOUCHER_TYPE
  let tran_type = obj.TRAN_TYPE
  let voucher_no = obj.VOUCHER_NO
  let branch = obj.BRANCH_CODE
  let checkbox1 = obj.CHECKBOX1
  let checkbox2  = obj.CHECKBOX2
          
 this.iframeurl= this.report_url+ "examples/VoucherPrinting.php?&date='"+date+"'&tran_type='"
                +tran_type+"&voucher_type='" + voucher_type +"'&voucher_no='" +sdate+ "'&sdate='"
                + voucher_no +  "'&branch='"+ branch +"'&checkbox1='" + checkbox1 +"'&checkbox2='" + checkbox2 +"&bankName=" + bankName + "";
 this.iframeurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }
  }

  close(){
    this.resetForm()
  }
  
  // Reset Function
  resetForm() {
    // this.createForm()
    this.ngForm.controls.VOUCHER_TYPE.reset();
    this.ngForm.controls.TRAN_TYPE.reset();
    this.ngForm.controls.VOUCHER_NO.reset();
    this.showRepo = false;
    // this.showCheckbox1 = false;
    // this.showCheckbox2 = false;
    this.clicked=false;
  }

}
function show(event: any) {
  // throw new Error('Function not implemented.');
}

function getVoucherData(event: any) {
  // throw new Error('Function not implemented.');
}

