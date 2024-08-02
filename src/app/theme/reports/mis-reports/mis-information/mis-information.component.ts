import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-information',
  templateUrl: './mis-information.component.html',
  styleUrls: ['./mis-information.component.scss']
})
export class MisInformationComponent implements OnInit {
  ngbranch
  todate: any = null;
  fromdate: any = null;
  maxDate: any;
  minDate: any;
  bsValue = new Date();
  formSubmitted = false;
  branchOption: any[];  

  // Created Form Group
  angForm: FormGroup;
  showRepo: boolean = false;
  showLoading: boolean = false;
  clicked = false;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  iframe5url: any = '';
  scheme_code: any;
  branchName: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private systemParameter: SystemMasterParametersService,
    private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,
  ) {
    this.fromdate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

    //for starting and ending date
    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      this.todate = data.CURRENT_DATE
      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['Branch'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.angForm.controls['Branch'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  get f(){
    return this.angForm.controls
    }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  onLoad() {
    this.showLoading = false;
  }
  close() {
    this.resetForm()
  }
  resetForm() {
    this.angForm.controls.START_DATE.reset();
    this.angForm.controls.END_DATE.reset();

    this.showRepo = false;
    this.clicked = false;
  }
  onFocus(ele: NgSelectComponent) {
    ele.open()
  }
  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.angForm.valid) {
      let obj = this.angForm.value
      this.showRepo = true;

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
      this.iframe5url = this.report_url + "examples/MISInfo.php?START_DATE='" + obj.START_DATE + "'&END_DATE='" + obj.END_DATE + "'&BRANCH='" + this.branchName + "'&BANK_NAME='" + bankName + "'";
      console.log(this.iframe5url)
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }
}
