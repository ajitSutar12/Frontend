

import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import * as moment from 'moment';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ibt-system-vouchers',
  templateUrl: './ibt-system-vouchers.component.html',
  styleUrls: ['./ibt-system-vouchers.component.scss']
})
export class IbtSystemVouchersComponent implements OnInit {



  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  equal: any
  startfrom
  startto
  formSubmitted = false;
  radioValue :String='sending';

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  report_url = environment.report_url;
  //Dropdown option variable
  ngbranch
  branchOption: any;
  iframe5url: any = '';
  clicked: boolean = false;

  RADIO: any;
 
  branchName: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private systemParameter: SystemMasterParametersService,
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
      if (result.branchId == 1 && result.RoleDefine[0].Role.id == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE

      this.fromdate = moment(`01/04/${year - 1}`, "DD/MM/YYYY")
      this.fromdate = this.fromdate._d
    })
  }
  



  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
      RADIO: new FormControl('sending'),
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
      this.branchName = result.branch.NAME

    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
      this.branchName = result.branch.NAME

    }
  }
  end() { }

  showLoading: boolean = false;

 
  view(event) {
    this.formSubmitted = true;
    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if(this.radioValue==='sending')
    {
    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let edate = moment(obj.END_DATE).format('DD/MM/YYYY');

      let edate: any;
      if (this.todate == obj.END_DATE) {
        edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let branched = obj.BRANCH_CODE;
      
      let flag = obj.RADIO;


     
      this.iframe5url = this.report_url + "examples/IBTSending.php?&edate='" + edate + "'&branched='" + this.ngbranch +  "'&branchName=" + this.branchName + "'&bankName='" + bankName + "'";
      console.log(this.iframe5url);
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
    }
  }
  else  if(this.radioValue==='receiving')
  {
  if (this.angForm.valid) {
    this.showRepo = true;
    let obj = this.angForm.value
    let stadate = moment(obj.START_DATE).format('DD/MM/YYYY');
    // let edate = moment(obj.END_DATE).format('DD/MM/YYYY');

    let edate: any;
    if (this.todate == obj.END_DATE) {
      edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
    } else {
      edate = moment(this.todate, 'DD/MM/YYYY').format('DD/MM/YYYY')
    };

    let branched = obj.BRANCH_CODE;
    
    let flag = obj.RADIO;


   
    this.iframe5url = this.report_url + "examples/IBTreceiving.php?&edate='" + edate + "'&branched='" + this.ngbranch +  "'&branchName=" + this.branchName + "'&bankName='" + bankName + "'";
    console.log(this.iframe5url);
    this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);
  }
}

    else {
      this.formSubmitted = false;
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }

  close() {
    0
    this.resetForm()
  }
  resetForm() {
    // this.createForm()
    this.showRepo = false;
    this.clicked = false;
    this.angForm.controls.END_DATE.reset();
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  onLoad() {
    this.showLoading = false;

  }

}




































  