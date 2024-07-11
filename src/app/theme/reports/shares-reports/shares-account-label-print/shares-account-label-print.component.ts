import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shares-account-label-print',
  templateUrl: './shares-account-label-print.component.html',
  styleUrls: ['./shares-account-label-print.component.scss']
})
export class SharesAccountLabelPrintComponent implements OnInit {
  ngForm: FormGroup;
  ngbranch
  branchOption: any;
  formSubmitted = false;
  scode: any = null;
  scheme: any[];
  transferSchemeDetails: any;
  tScheme
  accountedit1
  membno
  getschemename: any;
  getbankAcNo: any;
  getbankAcNo2: any;
  name: any;
  startAcNo: any;
  introducerACNo;
  branch_code: any;
  ngBranchCode: any = null;
  ngscheme: any = null;
  obj: any;
  ngAcnoFrom: any = null;
  ngAcnoTo: any = null;
  schemeACNo
  schemeACNo1
  showRepo: boolean;
  fromdate: any;
  todate: any;
  branchName: string;
  iframe5url:any='';
  report_url = environment.report_url;

  clicked: boolean;
  showLoading: boolean;
  defaultDate: any;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    
    this.createForm();

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {

      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SH');
      });
      this.scheme = filtered;
      console.log(this.scheme);

      // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      //   this.dates = data.CURRENT_DATE;
      // });

      // this.schemeAccountNoService.getShareMasterAcListForBalUpdation(this.obj).pipe(first()).subscribe(data => {
      //   this.schemeACNo = data

      // })

    })
  }
  accountedit: any = null
  getdata() {
    this.ngscheme = null;
    this.accountedit = null;
  }
  schemechange(event) {

    this.getschemename = event.name
    this.ngscheme = event.value
    this.getAccountlist()
  }
  getAccountlist() {
    this.accountedit = null
    
   
    let obj = [this.ngscheme, this.ngbranch]
    switch (this.getschemename) {
      case 'SH':
        this.schemeAccountNoService.getShareMasterAcListForBalUpdation(obj).pipe(first()).subscribe(data => {
          this.schemeACNo = data
          this.schemeACNo1 = data
          console.log("acNo",this.schemeACNo);
        })
        break;
    }

  }
  createForm() {
    this.ngForm = this.fb.group({

      BRANCH_CODE: ["", [Validators.required]],
      Scheme_code:["",[Validators.required]],
      AC_TYPE:[''],
      AC_TYPE1:[''],
      Schemewise:[''],
      Schemewise1:['']
      
    });
  }

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name

  }
  
  getIntTrans(event) {
    this.getschemename = event.name
    this.membno= event.label
    this.getInterestTransfer()
  }
  getIntTranscus(event) {
    this.getbankAcNo = event.bankacno
    this.name = event.name

  }
  getIntTrans1(event) {
    this.getbankAcNo2 = event.bankacno
    this.getInterestTransfer()
    this.getschemename = event.name
    this.introducerACNo = []
    this.startAcNo = null
  }
  getInterestTransfer() {

    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // let branchCode = result.branch.id;
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {

      case 'SH':
        this.schemeAccountNoService.getTermDepositSchemeList1(this.obj).subscribe(data => {
          this.introducerACNo = data;
          this.ngAcnoFrom = null
          this.introducerACNo = data;
          this.ngAcnoTo = null
        })
        break;
    }
  }


  close(){
    this.resetForm()

  }

  View(event) {
    
    event.preventDefault();
    this.formSubmitted = true;
console.log(event);
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    // let branchName = userData.branch.NAME

    if (this.ngForm.valid) {

      this.showRepo = true;

      let obj = this.ngForm.value
      // let startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      // // let enddate = moment(obj.END_DATE).format('DD/MM/YYYY');

      // let enddate: any;
      // if (this.todate == obj.END_DATE) {
      //   enddate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      // } else {
      //   enddate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      // };

      
      let branch = obj.BRANCH;
      let Schemecode = obj.Scheme_code;
      let membno = this.membno;
      let memname = this.getschemename;
      

      this.iframe5url = this.report_url + "examples/Shares_account_lable_print1.php?&bankName=" + bankName + "&Schemecode" + Schemecode + "&membno" +membno + "&memname" +memname ;
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }

  onLoad(){
    this.showLoading = false;

  }
  resetForm() {
  this.ngForm.controls.Scheme_code.reset();
  this.ngForm.controls.AC_TYPE.reset();
  this.ngForm.controls.AC_TYPE1.reset();
  this.ngForm.controls.Schemewise.reset();
  this.ngForm.controls.Schemewise1.reset();
    this.showRepo = false;
    this.clicked=false;
  }
  
}
