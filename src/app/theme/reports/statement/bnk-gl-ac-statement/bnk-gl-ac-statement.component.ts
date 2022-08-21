import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { first } from 'rxjs/operators';
import { Subject } from "rxjs";
import * as moment from 'moment';
// dropdown
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-bnk-gl-ac-statement',
  templateUrl: './bnk-gl-ac-statement.component.html',
  styleUrls: ['./bnk-gl-ac-statement.component.scss']
})
export class BnkGlAcStatementComponent implements OnInit {

  iframe2url: any = '';
  clicked:boolean=false;
  //api
  url = environment.base_url;
  formSubmitted = false;

  httpData: any;
  makeForm: any;

  angForm: FormGroup;
   //account
   memFrom
   memTo
   branch
   mem:any

  showButton: boolean = true;
  CloseShow: boolean = true;
  showRepo: boolean = false;
  report_url = environment.report_url
  //dropdown ngmodel variables

  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null
  scheme
  ngBranchCode: any = null
  branch_code
  ToAC
  fromAC
  obj: any;
  // Date variables
  todate: any = null;
  fromdate: any = null
  edate: any = null
  maxDate: Date;
  minDate: Date;
  
  bsValue = new Date();
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private sanitizer: DomSanitizer,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private schemeAccountNoService: SchemeAccountNoService,
    private ownbranchMasterService: OwnbranchMasterService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

    // Scheme Code
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'GL');
      });
      this.scheme = filtered;

    })

    //branch
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    // let data: any = localStorage.getItem('user');
    // let result = JSON.parse(data);
    // if (result.RoleDefine[0].Role.id == 1) {
    //   this.angForm.controls['BRANCH'].enable()
    // }
    // else {
    //   this.angForm.controls['BRANCH'].disable()
    //   this.ngBranchCode = result.branch.id
    // }
  }
  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      BRANCH: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      Month_wise_Summary: ['', [Validators.required]],
    });
  }


  //For Starting account and Ending Account dropdown
  getschemename: any

  getBranch() {
    this.getIntroducer()
  }
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }


  getIntroducer() {

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.ngscheme, branchCode]
    switch (this.getschemename) {


      case 'GL':
        this.schemeAccountNoService.getGeneralLedgerList1(this.obj).subscribe(data => {
          this.ToAC = data
          this.fromAC = data
        })
        break;

    }
  }



  src: any;
  View(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    
    if (this.angForm.valid) {

      this.showRepo = true;
     
      let obj = this.angForm.value
      let startdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let enddate = moment(obj.END_DATE).format('DD/MM/YYYY');
      let branch = obj.BRANCH;
      let scheme = obj.AC_TYPE
      let startingcode = obj.FROM_AC;
      let endingcode = obj.TO_AC;
      let MonthwiseSummary =obj.Month_wise_Summary

      this.iframe2url = this.report_url + "/GLaccStatement.php?startdate='" + startdate + "'&enddate='" + enddate + "'&branch='" + branch + "'&startingcode='" + startingcode + "'&endingcode='" + endingcode + "' &scheme='" + scheme + "' &MonthwiseSummary='" + MonthwiseSummary + "'&bankName='" + bankName + "'";
      this.iframe2url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe2url);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }

  //load acno according start and end acno
 loadAcno() {
  this.memFrom = this.angForm.controls['FROM_AC'].value
  this.memTo = this.angForm.controls['TO_AC'].value
  this.branch = this.angForm.controls['BRANCH'].value
  if (this.angForm.controls['FROM_AC'].value < this.angForm.controls['TO_AC'].value) {
    this.mem = [this.memFrom, this.memTo, this.branch]
   
    if (this.getschemename == 'GL') {
      this.http.get(this.url + '/gl-account-master/scheme/' + this.mem).subscribe((data) => {
      });
    }
   
  
  }
  else {
    Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
  }
}

close(){
  this.resetForm()
  }

 resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }
}
