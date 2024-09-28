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
import { ReportFrameComponent } from "../../report-frame/report-frame.component";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import { first } from 'rxjs/operators';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-bnk-dedsk-bal-list',
  templateUrl: './bnk-dedsk-bal-list.component.html',
  styleUrls: ['./bnk-dedsk-bal-list.component.scss'],
  providers: [OwnbranchMasterService, DeadstockmasterService]
})
export class BnkDedskBalListComponent implements OnInit {

  iframeurl: any = '';
  clicked: boolean = false;

  @ViewChild(ReportFrameComponent) child: ReportFrameComponent;

  //for date
  maxDate: Date;
  minDate: Date;
  dates: any = null


  //form Group
  ngForm: FormGroup;
  //dropdown
  scheme: any[];
  startingacc: any[];
  endingacc: any[];
  branchOption: any[];
  // for dropdown ng module

  ngbranch: any = null;
  schemeCode: any = null;
  obj: any;
  startingAccount: any = null;
  EndingAccount: any = null;
  //account
  memFrom
  memTo
  branch
  mem: any
  formSubmitted = false;

  showRepo: boolean = false;

  //api
  url = environment.base_url;
  report_url = environment.report_url;

  id: any;
  Cust_ID: any[] //customer id from idmaster
  newcustid: any = null;
  branchName: any;
  setLang: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,

    private _ownbranchmasterservice: OwnbranchMasterService,
    private sanitizer: DomSanitizer,
    private deadstockmasterService: DeadstockmasterService,
    private systemParameter: SystemMasterParametersService,
    private translate: TranslateService,
  ) {
    this.dates = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.dates = data.CURRENT_DATE;

      //Translation
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })


    //dead stock 
    this.deadstockmasterService.getDeadstockList().pipe(first()).subscribe(data => {

      this.startingacc = data;
      this.endingacc = data;
      console.log(data)
    })

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
  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],

      // Starting_Account: ['', [Validators.required]],
      // Ending_Account: ['', [Validators.required]],
      date: ['', [Validators.required]],

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
  scrollToTop() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }
  src: any;
  view(event) {
    debugger
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;

    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      // let Date = moment(obj.date).format('DD/MM/YYYY');

      let Date: any;
      if (this.dates == obj.date) {
        Date = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
      } else {
        Date = moment(this.dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
      };


      let branch = obj.BRANCH_CODE;
      let startingcode = obj.Starting_Account;
      let endingcode = obj.Ending_Account;


      this.iframeurl = this.report_url + "examples/DeadstockBalanceList.php?Date='" + Date + "'&branch='" + this.ngbranch + "'&startingcode=" + startingcode + "&endingcode=" + endingcode + "&bankName=" + bankName + "&branchName=" + branchName;
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      // Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });

      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Mandatory_Field')}`, 'warning').then(()=>{ this.clicked=false});
    }

  }
  close() {
    this.resetForm()
  }

  resetForm() {
    // this.createForm()
    // this.ngForm.controls.BRANCH_CODE.reset();
    this.ngForm.controls.date.reset();
    // this.ngForm.controls.Ending_Account.reset();
    this.showRepo = false;
    this.clicked = false;
  }

  getschemename
  //load acno according start and end acno
  loadAcno() {
    this.memFrom = this.ngForm.controls['Starting_Account'].value
    this.memTo = this.ngForm.controls['Ending_Account'].value
    this.branch = this.ngForm.controls['BRANCH_CODE'].value
    if (this.ngForm.controls['Starting_Account'].value <= this.ngForm.controls['Ending_Account'].value) {
      this.mem = [this.memFrom, this.memTo, this.branch]
      if (this.getschemename) {
        this.http.get(this.url + '/dead-stock-master' + this.mem).subscribe((data) => {
        });
      }





    }
    else {
      Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
      this.ngForm.controls.Ending_Account.reset();
    }
  }
  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
}
