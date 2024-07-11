import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-security-sumarry-report',
  templateUrl: './all-security-sumarry-report.component.html',
  styleUrls: ['./all-security-sumarry-report.component.scss']
})
export class AllSecuritySumarryReportComponent implements OnInit {
  ngForm: FormGroup;
  ngbranch
  branchOption: any;
  formSubmitted = false;
  scode: any = null;
  scheme: any[];
  transferSchemeDetails: any;
  tScheme
  accountedit1
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
  schemeType:any=[];
  //date
bsValue = new Date();
end_date: String;
maxDate: Date;
minDate: Date;
url = environment.base_url;


  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    public schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private sanitizer: DomSanitizer,
    private http: HttpClient,

  ) { 
    this.end_date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

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

    this.http.get(this.url+'/ledger-view/schems').subscribe((data: any) => {
      this.schemeType = data
      console.log(this.schemeType)
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
  getIntro (event) {
    this.getschemename = event.name
    this.getIntroducer()
  }
  getIntroducer() {
    throw new Error('Method not implemented.');
  }
  createForm() {
    this.ngForm = this.fb.group({

      BRANCH_CODE: ["", [Validators.required]],
      Scheme_code:["",[Validators.required]],
      AC_TYPE:[''],
      AC_TYPE1:[''],
      Schemewise1:[''],
      AC_TYPE2: ['', [Validators.required]],
      end_date: ["", [Validators.required]],


      
    });
  }

  getTransferAccountList(event) {
    this.transferSchemeDetails = event
    this.tScheme = event.name

  }
  getaccont
  getIntTrans(event) {
    this.getschemename = event.name
    this.getaccont = event.label

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
  reset() {
    this.ngForm.controls['end_date'].reset()
    this.ngForm.controls['AC_TYPE2'].reset()
    this.ngForm.controls['AC_TYPE1'].reset()
    this.ngForm.controls['AC_TYPE'].reset()
    this.ngForm.controls['Scheme_code'].reset()


   }

  close(){
    this. reset();
    this.showRepo = false;
    this.clicked = false;
   }

  view(event) {


    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;


    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      let Date1 = moment(obj.end_date).format('DD/MM/YYYY');


      // let radio = obj.SUBMISSION
      let branch = obj.BRANCH;
      let Schemecode = obj.Scheme_code;
      let startingaccount= this.getaccont;

      this.iframe5url = this.report_url + "examples/allsecuritysummary.php/?&branchname='" + branchName + "'&Bankname='" + bankName + "'&AC_RECOVERY_CLERK='" + bankName + "'&branch='" + this.ngbranch + "'&edate='" + Date1+"'&startingaccount='"+ startingaccount+"'&endingaccount='"+startingaccount;
      // this.iframe5url = this.report_url + "examples/CLERKWISE.php/?&branchname='kotoli'&sdate='01/04/2022'&AC_TYPE='50100'&AC_RECOVERY_CLERK='2'";

      console.log(this.iframe5url);
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
  this.ngForm.controls['end_date'].reset();

    this.showRepo = false;
    this.clicked=false;
  }


}
