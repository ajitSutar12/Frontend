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
  //api
  url = environment.base_url;
  formSubmitted = false;

  httpData: any;
  makeForm: any;

  angForm: FormGroup;

  showButton: boolean = true;
  CloseShow: boolean = true;
  showRepo: boolean = false;
  //dropdown ngmodel variables

  ngscheme: any = null
  ngfromac: any = null
  ngtoac: any = null
  scheme
  ngBranchCode: any = null
  branch_code
  ToAC
  fromAC
  getschemename
  minDate: any;
  maxDate: Date;
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
    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var allscheme = data.filter(function (scheme) {
        return (scheme.name == 'LN' || scheme.name == 'CC' || scheme.name == 'DS');
      });
      this.scheme = allscheme;
    })
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH'].enable()
    }
    else {
      this.angForm.controls['BRANCH'].disable()
      this.ngBranchCode = result.branch.id
    }
  }
  createForm() {
    this.angForm = this.fb.group({
      AC_TYPE: ['', [Validators.required]],
      FROM_AC: ['', [Validators.required]],
      TO_AC: ['', [Validators.required]],
      BRANCH: ['', [Validators.required]]
    });
  }
  getBranch() {
    this.ngscheme = null
    this.ngfromac = null
    this.ngtoac = null
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
  src:any;
  submit(event) {
    debugger
    this.showRepo = true;
    let obj = this.angForm.value
    let date = moment(obj.MINAGECAl_DATE).format('DD/MM/YYYY');
    // const url="http://localhost/NewReport/report-code/Report/examples/GLaccStatement.php?startDate='"+date+"'";
    const url="http://localhost/NewReport/report-code/Report/examples/GLaccStatement.php";
    console.log(url);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(url);
   
    this.formSubmitted = false;
  }
  close(){
    this.resetForm()
  }

  // Reset Function
  resetForm() {
    this.createForm();
    this.showRepo = false;
  }
}
