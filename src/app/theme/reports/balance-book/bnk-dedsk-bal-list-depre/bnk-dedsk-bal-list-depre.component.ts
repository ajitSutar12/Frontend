import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";

import { DeadstockmasterService } from 'src/app/theme/master/customer/dead-stock-master/dead-stock-master.service';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-bnk-dedsk-bal-list-depre',
  templateUrl: './bnk-dedsk-bal-list-depre.component.html',
  styleUrls: ['./bnk-dedsk-bal-list-depre.component.scss'],
  providers: [OwnbranchMasterService, DeadstockmasterService]
})
export class BnkDedskBalListDepreComponent implements OnInit {

  iframeurl: any = '';
  clicked: boolean = false;
  //for date
  maxDate: Date;
  minDate: Date;
  date: any = null
  report_url = environment.report_url
  //account
  memFrom
  memTo
  branch
  mem: any

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

  formSubmitted = false;

  showRepo: boolean = false;

  //api
  url = environment.base_url;


  id: any;
  Cust_ID: any[] //customer id from idmaster
  newcustid: any = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public router: Router,

    private _ownbranchmasterservice: OwnbranchMasterService,
    private sanitizer: DomSanitizer,
    private deadstockmasterService: DeadstockmasterService
  ) {
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
    })



    //dead stock 
    this.deadstockmasterService.getDeadstockList().pipe(first()).subscribe(data => {
      this.startingacc = data;
      this.endingacc = data;
      console.log(data)
    })
  }
  src: any;

  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;

    if (this.ngForm.valid) {

      this.showRepo = true;
      let obj = this.ngForm.value
      let date = moment(obj.Date).format('DD/MM/YYYY');

      let branch = obj.BRANCH_CODE;
      let startingcode = obj.Starting_Account;
      let endingcode = obj.Ending_Account;



      this.iframeurl = this.report_url + "/BnkDeadbalDepr.php?date='" + date + "'&branch='" + branch + "'&startingcode='" + startingcode + "'&endingcode='" + endingcode + "' &bankName='" + bankName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
    }

  }



  // validations for ngForm
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],

      Starting_Account: ['', [Validators.required]],
      Ending_Account: ['', [Validators.required]],
      Date: ['', [Validators.required]],

    });
  }

  getschemename
  //load acno according start and end acno
  loadAcno() {
    this.memFrom = this.ngForm.controls['Starting_Account'].value
    this.memTo = this.ngForm.controls['Ending_Account'].value
    this.branch = this.ngForm.controls['BRANCH_CODE'].value
    if (this.ngForm.controls['Starting_Account'].value < this.ngForm.controls['Ending_Account'].value) {
      this.mem = [this.memFrom, this.memTo, this.branch]
      if (this.getschemename) {
        this.http.get(this.url + '/dead-stock-master' + this.mem).subscribe((data) => {
        });
      }





    }
    else {
      Swal.fire('Info', 'Ending Account Number Must Greater Than Starting  Account Number', 'info')
    }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked = false;
  }
}
