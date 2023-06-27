
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
import { Subject, Subscription } from "rxjs";
// Creating and maintaining form fields with validation
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// Displaying Sweet Alert
import Swal from "sweetalert2";
// Used to Call API
import { HttpClient, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import * as moment from 'moment';
import { environment } from "src/environments/environment";
import { DomSanitizer } from '@angular/platform-browser';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from "src/app/shared/dropdownService/scheme-code-dropdown.service";
import { SchemeAccountNoService } from "src/app/shared/dropdownService/schemeAccountNo.service";
import { first } from "rxjs/operators";
import { SchemeTypeDropdownService } from "src/app/shared/dropdownService/scheme-type-dropdown.service";
import { IOption } from "ng-select";
import { SystemMasterParametersService } from "src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { ReportFrameComponent } from "../../../report-frame/report-frame.component";
import { NgSelectComponent } from "@ng-select/ng-select";


@Component({
  selector: 'app-acwise-loanoverdue-list',
  templateUrl: './acwise-loanoverdue-list.component.html',
  styleUrls: ['./acwise-loanoverdue-list.component.scss']
})
export class AcwiseLoanoverdueListComponent implements OnInit {

    iframe5url: any = '';
    @ViewChild(ReportFrameComponent) child: ReportFrameComponent;
    formSubmitted = false;
  
    //fromgroup
    ngForm: FormGroup
    minvalue:any;
    maxvalue:any;
    // for dropdown ng module
    fromdate: any = null
    ngbranch: any = null;
    scode: any = null;
    ecode:any = null;
    //ngfor
    scheme: any[];
    branchOption: any[];
    clicked: boolean = false;
    showRepo: boolean = false;
    showLoading: boolean = false;
    transferSchemeDetails: any;
    tScheme
  
    //date
    todate: any = null
    bsValue = new Date();
  
    maxDate: Date;
    minDate: Date;
    report_url = environment.report_url;
    branchName: any;
  obj1: any[];
  
    constructor(
      private fb: FormBuilder,
      private _ownbranchmasterservice: OwnbranchMasterService,
      private systemParameter: SystemMasterParametersService,
      public schemeCodeDropdownService: SchemeCodeDropdownService,
      private sanitizer: DomSanitizer,
      private schemeAccountNoService: SchemeAccountNoService,
  
    ) {
      this.todate = moment().format('DD/MM/YYYY');
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
    }
  
    ngOnInit(): void {
      this.createForm()
      //branchlist
      this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
        this.branchOption = data;
      })
  
      // Scheme Code
      this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
  
        var filtered = data.filter(function (scheme) {
          return (scheme.name == 'LN' && scheme.IS_GOLD_LOAN == '1' );
        });
        this.scheme = filtered;
        console.log(this.scheme);
        
        let info: any = localStorage.getItem('user');
        let result = JSON.parse(info);
        let branchCode = result.branch.id;
        // let code = 12;
        this.obj1 = [this.scode, branchCode]
        switch (this.tScheme){
          case 'LN':
            
              this.schemeAccountNoService.getTermLoanMasterAcListForBalUpdation(this.obj1).pipe(first()).subscribe(data => {
                this.scode = data
            this.ecode = data
            console.log(data);
          //     })
          // this.schemeAccountNoService.getTermLoanSchemeList1(this.obj1).subscribe(data => {
          //   this.scode = data
          //   this.ecode = data
          //   console.log(data);
            
          })
          break;
        }
  
        // this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
        //   this.todate = data.CURRENT_DATE;
        // });
  
      })
      this.systemParameter.getFormData(1).subscribe(data => {
        let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
        this.todate = data.CURRENT_DATE
  
        this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
        this.fromdate = this.fromdate._d
      })
  
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
  
    getTransferAccountList(event) {
      this.transferSchemeDetails = event
      this.tScheme = event.name
  
    }
  
    createForm() {
      this.ngForm = this.fb.group({
        BRANCH_CODE: ['', [Validators.required]],
        Scheme_code: ["", [Validators.required]],
        END_DATE: ['', [Validators.required]],
        Min_save: ['', [Validators.required]],
        Max_save: ['', [Validators.required]],
        Start_code: [''],
        End_code: [''],
        npa_per: [''],
        checkboxValue:[''],


  
      });
  
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
  
        // let Date = moment(obj.date).format('DD/MM/YYYY');
        // let tDate = moment(Date, 'DD/MM/YYYY')
        //for start date
        if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
          obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
        }
        else {
          let date = moment(this.fromdate).format('DD/MM/YYYY');
          let tDate = moment(date, 'DD/MM/YYYY')
          obj['START_DATE'] = date
        }
  
        //for end date
        if (this.todate == userData.branch.syspara.CURRENT_DATE) {
          obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
        }
        else {
          let date = moment(this.todate).format('DD/MM/YYYY');
          let tDate = moment(date, 'DD/MM/YYYY')
          obj['END_DATE'] = date
        }
  
        let scheme = obj.Scheme_code
        let branch = obj.BRANCH_CODE;
        let schemeName = this.tScheme
        let Dates = obj.END_DATE;
        let flag = obj.npa_per;
  
        //  let startingcode= obj.Starting_Account;
        // let endingcode =obj.Ending_Account;
  
        // this.iframe5url = this.report_url + "examples/GoldSilverSecurity.php?START_DATE='" + obj.START_DATE+ "'&END_DATE='" + obj.END_DATE+ "'&BRANCH='"+this.branchName+"'&BANK_NAME='"+bankName+"'&AC_TYPE='" +scheme+ "'&AC_ACNOTYPE='" + schemeName+ "'";


        this.iframe5url = this.report_url + "examples/AccountWiseLoanOverDueList.php?AC_TYPE="+schemeName+"&BRANCH_CODE="+branch+"&FLAG="+flag+"&date1='"+Dates+"'&BranchName='"+this.branchName+"'&schemeCode='"+scheme+"'&bankName='"+bankName+"'"
  
        console.log(this.iframe5url);
        this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
      }
      else {
        Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
      }
    }
    close() {
      this.resetForm()
  
    }
    onLoad() {
      this.showLoading = false;
  
    }
    resetForm() {
      this.ngForm.controls.Scheme_code.reset();
  
      this.showRepo = false;
      this.clicked = false;
    }
    onFocus(ele: NgSelectComponent) {
      ele.open()
    }
    getBranch(event) {
      this.ngbranch = event.value
      this.branchName = event.branchName
    }
  }
