import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kyc-document-received-not-received',
  templateUrl: './kyc-document-received-not-received.component.html',
  styleUrls: ['./kyc-document-received-not-received.component.scss']
})
export class KYCDocumentReceivedNotReceivedComponent implements OnInit {

  // Created Form Group
  ngForm: FormGroup;
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: any;
  minDate: any;
  bsValue = new Date();
  equal: any
  startfrom
  startto
  // for dropdown ng module
  ngbranch: any = null;
  schemeCode: any = null;
  transferSchemeDetails: any;
  tScheme
  //dropdown
  scheme: any[];
  branchOption: any[];
  //iframe
  formSubmitted = false;
  clicked: boolean = false;
  showRepo: boolean = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = ' ';
  branchName: any;
  scheme_code: any;
  schemeList: any[];
  ngIntroducer: any = null


  constructor(
    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    public SchemeTypes: SchemeTypeDropdownService) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }


  ngOnInit(): void {
    this.createForm();
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList1().pipe(first()).subscribe(data => {

      this.schemeList = data;
      this.ngIntroducer = null;
    })
    //display date
    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });
    //for starting and ending date
    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.todate = data.CURRENT_DATE
      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })
  }
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.pattern, Validators.required]],
      scheme_code: ['',],
      // radio_sort:new FormControl('rentreceipt'),
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      Received: ['Received'],
      Pending: [''],
      All: ['']

    });
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  src: any;
  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    let schemeName = this.tScheme

    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;


      let flag = obj.All;
      let flag1

      if (flag == 'All') {
        flag1 = 1;
      } else if (flag == 'Received') {
        flag1 = 2;
      }
      else if (flag == 'Pending') {
        flag1 = 3;
      }

      //for start Date
      if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
        obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.fromdate).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['START_DATE'] = date
      }
      //for End Date
      if (this.todate == userData.branch.syspara.CURRENT_DATE) {
        obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
      }
      else {
        let date = moment(this.todate).format('DD/MM/YYYY');
        let tDate = moment(date, 'DD/MM/YYYY')
        obj['END_DATE'] = date
      }

      let scheme = obj.scheme_code;
      let branch = obj.BRANCH_CODE
      let AC_TYPE = obj.AC_TYPE



      this.iframe5url = this.report_url + "examples/KYCDocumentRecNotRec.php?START_DATE='" + obj.START_DATE + "'&END_DATE='" + obj.END_DATE + "'&BRANCH='" + this.branchName + "'&BANK_NAME='" + bankName + "'&BRANCH_CODE='" + this.ngbranch + "&flag=" + flag1 + "&PRINT_DATE='" + obj.END_DATE + "'&scheme='" + obj.Scheme_code + "'&startDate='" + obj.START_DATE + "'&endDate='" + obj.END_DATE + "'";
      // console.log(this.iframe5url) 
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);


    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }
  end(){
    this.clicked = false;
  }

  getTransferAccountList(event) {
    this.tScheme = event.label
  }
  resetForm() {
    this.ngForm.controls.START_DATE.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  close() {
    this.resetForm()
  }

}
