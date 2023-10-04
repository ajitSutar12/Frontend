import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
// import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';



@Component({
  selector: 'app-bnk-ivopen-and-close-reg',
  templateUrl: './bnk-ivopen-and-close-reg.component.html',
  styleUrls: ['./bnk-ivopen-and-close-reg.component.scss']
})
export class BnkIVOpenAndCloseRegComponent implements OnInit {
  // Created Form Group
  angForm: FormGroup;
  //  variable for validation
  formSubmitted = false;
  clicked: boolean = false;

  iframeurl: any = '';

  report_url = environment.report_url;
  // branch name 
  selectedBranch: number;
  branch_codeList: any = null
  branch_code: any[]//from ownbranchmaster
  branchCode: any = null
  ngBranchCode
  ngscheme: any[];
  ngIntroducer: any = null
  schemeList: any[];
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  getschemename: any;
  fromAC: any;
  ToAC: any;
  ngfromac: any;
  ngtoac: any;
  showRepo: boolean = false;
  scheme_code: any;
  tScheme
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private systemParameter: SystemMasterParametersService,
  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
  }
  // Method to handle validation of form
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      scheme_code: ['',],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      // AC_OPEN:  new FormControl('AC_OPEN'),
      AC_OPEN: ['AC_OPEN',],
      PRINT_CLOSEAC: ['',],
    })
  }
  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngBranchCode = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }

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

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })

    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'IV');
      });
      this.schemeList = filtered;
      this.ngIntroducer = null;
    })

    // this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
    //   this.allScheme.push(data)
    // })


  }
  getTransferAccountList(event) {
    this.tScheme = event.label
  }
  src: any;
  View(event) {
    debugger
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    this.formSubmitted = true;
    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let startDate = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let enddate = moment(obj.END_DATE).format('DD/MM/YYYY');

      let enddate: any;
      if (this.todate == obj.END_DATE) {
        enddate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        enddate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let scheme = obj.scheme_code;
      let Branch = obj.BRANCH_CODE
      let GROUP_BY = obj.GROUP_BY
      let type = this.schemeList.filter(ele => ele.value == scheme);
      let schemeName = this.tScheme
      let acclose
      if (obj.AC_OPEN == 'AC_OPEN') {
        acclose = 1
      }
      else {
        acclose = 0
      }

      // this.iframeurl = this.report_url+"examples/InvestmentRegister.php?startDate_='"+startDate+"'&endDate_='"+enddate+"'&Branch="+Branch+"&bankName=" + bankName + "&scheme="+scheme+"" ;
      this.iframeurl = this.report_url + "examples/investmentReg.php?bankName='" + bankName + "'&NAME='" + branchName + "'&startDate_='" + startDate + "'&enddate_='" + enddate + "'&AC_ACNOTYPE='" + type[0].name + "'&ACNOTYPE='" + schemeName + "' &AC_TYPE=" + scheme + "&trandrcr='C'&ac_op_cd='D'&tran_status='1'&branchcode=" + Branch + "&AC_DATA=" + obj.AC_OPEN + "&acclose=" + acclose
      console.log(this.iframeurl);
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }
  }

  //get account no according scheme
  getAccountList(event) {
    this.ngfromac = null
    this.ngtoac = null
    let obj = [this.ngscheme, this.ngBranchCode]
    switch (event.name) {
      case 'DS':
        this.schemeAccountNoService.getDisputeLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

      case 'LN':
        this.schemeAccountNoService.getTermLoanSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })

        break;

      case 'CC':
        this.schemeAccountNoService.getCashCreditSchemeList1(obj).pipe(first()).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;
    }
    this.getschemename = event.name
  }

  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    // this.createForm()
    this.angForm.controls.scheme_code.reset();
    this.angForm.controls.AC_OPEN.reset();
    this.showRepo = false;
    this.clicked = false;
  }

}
