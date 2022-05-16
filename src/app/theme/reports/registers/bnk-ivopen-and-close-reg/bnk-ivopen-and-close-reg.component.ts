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
// branch name 
selectedBranch: number;
branch_codeList: any = null
branch_code: any[]//from ownbranchmaster
branchCode: any = null
ngBranchCode
ngscheme
allScheme: any[];
 // Date variables
 todate: any = null;
 fromdate:any=null
 maxDate: Date;
 minDate: Date;
 bsValue = new Date();
  getschemename: any;
  fromAC: any;
  ToAC: any;
  ngfromac: any;
  ngtoac: any;
  showRepo: boolean = false;
constructor(
  private fb: FormBuilder,
  private http: HttpClient,
  private sanitizer: DomSanitizer,
  private ownbranchMasterService: OwnbranchMasterService,
  private schemeCodeDropdownService: SchemeCodeDropdownService,
  private schemeAccountNoService: SchemeAccountNoService,
) {
  this.maxDate = new Date();
  this.minDate = new Date();
  this.minDate.setDate(this.minDate.getDate());
  this.maxDate.setDate(this.maxDate.getDate())
 }
// Method to handle validation of form
createForm() {
  this.angForm = this.fb.group({
    BRANCH_CODE: ['', [Validators.required]],
    AC_TYPE: ['', [Validators.required]],
    START_DATE: ['', [Validators.required]],
    END_DATE: ['', [Validators.required]],
    AC_OPEN:  new FormControl('AC_OPEN'),
    PRINT_CLOSEAC: ['', [Validators.required]],
  })
}
ngOnInit(): void {
  this.createForm()
  let data: any = localStorage.getItem('user');
  let result = JSON.parse(data);
  if (result.RoleDefine[0].Role.id == 1) {
    this.angForm.controls['BRANCH_CODE'].enable()
    this.ngBranchCode = result.branch.id
  }
  else {
    this.angForm.controls['BRANCH_CODE'].disable()
    this.ngBranchCode = result.branch.id
  }
  //branch List
  this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
    this.branch_code = data;
    // this.ngBranchCode = data[0].value
  })
  this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
    var allscheme = data.filter(function (scheme) {
      return (scheme.name == 'IV')
    });
    this.allScheme = allscheme;
  })

  // this.schemeCodeDropdownService.getTermDepositSchemePatD().pipe(first()).subscribe(data => {
  //   this.allScheme.push(data)
  // })
 

}
src: any;
View(event){
  event.preventDefault();
  this.formSubmitted = true;
  if (this.angForm.valid) {
   this.showRepo = true;
  let obj = this.angForm.value
  let startDate = moment(obj.START_DATE).format('DD/MM/YYYY');
  let enddate = moment(obj.START_DATE).format('DD/MM/YYYY');
  let BRANCH_CODE = obj.BRANCH_CODE
  let GROUP_BY = obj.GROUP_BY
  const url = "http://localhost/NewReport/report-code/Report/examples/InvestRegister.php?startDate='" + startDate + "' &enddate='" + enddate + "'  &BRANCH_CODE='" + BRANCH_CODE + "' ";
  console.log(url);
  this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // let ageCaldate
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
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
}
