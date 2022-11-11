import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, } from "@angular/core";
import { Subject } from "rxjs";
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
import { first } from 'rxjs/operators';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@Component({
  selector: 'app-bnk-day-book-summary',
  templateUrl: './bnk-day-book-summary.component.html',
  styleUrls: ['./bnk-day-book-summary.component.scss'],
  providers: [OwnbranchMasterService]
})
export class BnkDayBookSummaryComponent implements OnInit {
  dt: any;
  dataDisplay: any;
  formSubmitted = false;
  src: any;
  showRepo: boolean = false;
  // Created Form Group
  ngForm: FormGroup;
  //api
  report_url = environment.report_url;
  url = environment.base_url;
  maxDate: Date;
  minDate: Date;
  startingdate: any = null
  endingdate: any = null
  branchOption: any[];
  ngbranch: any = null
  iframe1url: any = ' ';
  clicked:boolean=false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private systemParameter :SystemMasterParametersService,
  ) {
    this.startingdate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }


  ngOnInit(): void {
    this.createForm()

    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.ngForm.controls['BRANCH'].enable()
    //   this.ngbranch = result.branch.id
    // }
    // else {
    //   this.ngForm.controls['BRANCH'].disable()
    //   this.ngbranch = result.branch.id
    // }

    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.startingdate = data.CURRENT_DATE;
    });

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.ngForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.ngForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  }

  createForm() {
    this.ngForm = this.fb.group({
      Branch: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      Starting_Date: [''],
      Denomination_Detail_Required: [''],
      Group_Profit_And_Loss_Account: ['']
    });
  }

  selectedType
  Types = [
    { id: 1, value: "Summary" },
    { id: 2, value: "Details" },
    { id: 3, value: "Subsidairy Grouping" },
  ];


  View(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME
    
    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      let stdate = moment(obj.Starting_Date).format('DD/MM/YYYY');
      let Branch = obj.Branch;
      let Type = obj.Type;
      let checkb1 = obj.Group_Profit_And_Loss_Account;
      let checkb2 = obj.Denomination_Detail_Required;


      this.iframe1url =this.report_url+ "examples/DayBookReport.php?stdate='" + stdate + "'&Branch='" + Branch + "'&Type='" + Type + "'&checkb1='" + checkb1 + "'&checkb2='" + checkb2 + "'&bankName='" + bankName + "'";
      this.iframe1url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe1url);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }

  obj1: any
  getBranch() {
    this.obj1 = [this.ngbranch]
  }
  close() {
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }

}
