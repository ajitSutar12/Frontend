import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { CustomerIDMasterDropdownService } from 'src/app/shared/dropdownService/customer-id-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-courtwise-dispute-loandetail',
  templateUrl: './courtwise-dispute-loandetail.component.html',
  styleUrls: ['./courtwise-dispute-loandetail.component.scss']
})
export class CourtwiseDisputeLoandetailComponent implements OnInit {

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  report_url = environment.report_url;
  url = environment.base_url;
  ngBranchCode: any = null;
  branch_code: any;
  formSubmitted = false;
  schemeCode: any = null;
  getschemename: any;
  allScheme: any = null
  fromdate:any=null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  todate: any = null;
  showLoading:boolean = false;
    //dropdown ngmodel variables
    ngscheme: any = null
    obj: any
    mem: any
    equal:any
    memFrom
    startfrom
    memTo
    startto
    branch
    scheme
   
    clicked:boolean=false;
    getbankAcNo: any;
    getbankAcNo2: any;
  branchName: any;
  introducerACNo

  name: any;
  iframe5url:any='';


  constructor(
    private  fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private systemParameter: SystemMasterParametersService,private translate:TranslateService,
    private schemeAccountNoService:SchemeAccountNoService
  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC');
      });
      this.scheme = allscheme;
    })

    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    });

    // debugger
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE
      
      this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
      this.fromdate = this.fromdate._d
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
      this.branchName = result.branch.NAME

    }
    
  }

  createForm(){
    this.angForm = this.fb.group({
      BRANCH: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      AC_TYPE: [''],
      S_TYPE:[''],
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.angForm.controls['BRANCH'].enable()


    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }
  }

  //function to get ac no according branch
  getBranch() {

    this.getInterestTransfer()
  }
  //get acnotype from selected scheme
  getIntTrans(event) { 
    this.getschemename = event.name
    this.getInterestTransfer()
  }
  getIntTranscus(event) { 
    this.getbankAcNo =  event.bankacno
    this.name = event.name

  }

  getIntTrans1(event) {
    this.getbankAcNo2 =  event.bankacno
    this.getInterestTransfer()
    this.getschemename = event.name
    this.introducerACNo = []
  }
 
  getInterestTransfer() {

    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // let branchCode = result.branch.id;
    this.obj = [this.ngscheme, this.ngBranchCode]
    switch (this.getschemename) {
        case 'LN':
        // this.schemeAccountNoService.getTermLoanSchemeList1(this.obj).subscribe(data => {
          this.schemeAccountNoService.getTermLoanMasterAcListForLedger(this.obj).pipe(first()).subscribe(data => {
          this.introducerACNo = data;

        })
        break;
          case 'CC':
            // this.schemeAccountNoService.getCashCreditSchemeList1(this.obj).subscribe(data => {
              this.schemeAccountNoService.getCashCreditMasterAcListForLedger(this.obj).pipe(first()).subscribe(data => {
              this.introducerACNo = data;
             
            })
            break;
    }
  }
end(){
  this.startfrom = this.angForm.controls['START_DATE'].value
  this.startto = this.angForm.controls['END_DATE'].value
  if (this.angForm.controls['START_DATE'].value <= this.angForm.controls['END_DATE'].value) {
    this.equal = [this.startfrom, this.startto]
  }
  else {
    Swal.fire(`${this.translate.instant('Swal_Msg.Info')}`, `${this.translate.instant('Swal_Msg.E_S_Date')}`, 'info')
  }
}
scrollToTop() {
  window.scrollTo({ top: 200, behavior: 'smooth' });
} 
View(event) {
  event.preventDefault();

  let userData = JSON.parse(localStorage.getItem('user'));
  let bankName = userData.branch.syspara.BANK_NAME;
  let branchName = userData.branch.NAME

  if (this.angForm.valid) {
    this.showRepo = true;
    let obj = this.angForm.value
    let edate:any;
    if (this.todate == obj.END_DATE) {
      edate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    }else{ 
      edate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
    };

    let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
    // let edate = moment(obj.TO_DATE).format('DD/MM/YYYY');
    var sdate = moment(obj.START_DATE).subtract(1, "day").format('DD/MM/YYYY');
    let branch = obj.BRANCH;
    let scheme = obj.AC_TYPE;
  
  
    this.iframe5url = this.report_url + "examples/CourtwiseDisputeloandetailslist.php?&startdate='" + stadate + "'&enddate='" + edate + "'&AC_ACNOTYPE='" + this.getschemename + "'&branchName='" + branchName + "'&bankName='" + bankName +  "'";

    this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);

  }
  else {
    Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(() => { this.clicked = false });
  }

}
close(){
  this.resetForm() 
}

// Reset Function
resetForm() {
  this.angForm.controls.S_TYPE.reset();
  this.angForm.controls.AC_TYPE.reset();
  this.angForm.controls.END_DATE.reset();
  this.angForm.controls.START_DATE.reset();
  this.showRepo = false;
  this.clicked=false;
}
onLoad(){
  this.showLoading = true;

}

}
