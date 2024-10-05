import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
// dropdown
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-rece-pay-rep',
  templateUrl: './rece-pay-rep.component.html',
  styleUrls: ['./rece-pay-rep.component.scss'],
  providers: [OwnbranchMasterService]
})
export class RecePayRepComponent implements OnInit {
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //Dropdown option variable
  ngbranch
  branchOption: any;
  iframeurl: any = ' ';
  report_url = environment.report_url;
  clicked: boolean = false;
  branchName: string;
  setLang: string;

  constructor(private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,private translate:TranslateService,
    // dropdown
    private _ownbranchmasterservice: OwnbranchMasterService,

  ) {
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm();
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
      let data1: any = localStorage.getItem('user');
      let result = JSON.parse(data1);
      if (result.branchId == 100 && result.RoleDefine[0].Role.id == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }
    })


    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
      this.fromdate = this.fromdate._d
    })
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      // TRANSCATION: new FormControl ('None'),
      PRINT: ["",],
      PENAL: ["",],
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } 
  view(event) {
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    // let branchName = userData.branch.NAME;

    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let start2date = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let end1date = moment(obj.END_DATE).format('DD/MM/YYYY');

      let end1date: any;
      if (this.todate == obj.END_DATE) {
        end1date = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        end1date = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let branch = obj.BRANCH_CODE;
      // let tran = obj.TRANSCATION;
      let print = obj.PRINT;
      let penal = obj.PENAL;
      let branchCode = obj.BRANCH_CODE;
      if (branchCode == 0) {
        this.branchName = 'Consolidate';
      }
      this.iframeurl = this.report_url + "examples/Receiptconsine.php?start2date='" + start2date + "'&end1date='" + end1date + "'&branchName=" + this.branchName + "&print=" + print + "&penal=" + penal + "&bankName=" + bankName + "&branched=" + branchCode + " ";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }
  close() {
    this.resetForm()
  }
  // Reset Function
  resetForm() {
    // this.createForm()
    // this.angForm.controls.BRANCH_CODE.reset();
    this.showRepo = false;
    this.clicked = false;
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }


}
