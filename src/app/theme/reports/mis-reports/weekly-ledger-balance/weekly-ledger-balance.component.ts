import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-weekly-ledger-balance',
  templateUrl: './weekly-ledger-balance.component.html',
  styleUrls: ['./weekly-ledger-balance.component.scss']
})
export class WeeklyLedgerBalanceComponent implements OnInit {
  ngForm: FormGroup
  ngbranch
  //ngfor
  branchOption

  //ngmodel
  branch
  schemetype
  sdate
  edate
  bsValue = new Date();
  Schemewise: boolean = false;
  url = environment.base_url;
  from_Date: string;
  maxDate: Date;
  minDate: Date;
  showRepo: boolean = false;
  report_url = environment.report_url;
  showLoading: boolean = false;
  constructor(private fb: FormBuilder,private sanitizer: DomSanitizer,
    private _ownbranchmasterservice: OwnbranchMasterService,private http :HttpClient) {
      this.from_Date = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate())

     }
   scheme
  ngOnInit(): void {
    this.createForm()
    //branchlist
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });

    this.http.get(this.url +'/ledger-view/cschemtdsbpg').subscribe((data: any) => {
      this.scheme = data
      console.log(this.scheme)
    })
  }
  createForm() {
    this.ngForm = this.fb.group({
    BRANCH_CODE: ['', [Validators.required]],
    // scheme: ["",[ Validators.required]],
    from_Date: ["", [Validators.required]],
    to_Date: ["", [Validators.required]],
    // T_TYPE:['T_TYPE'],
    Schemewise:[""]

    // START_DATE: ['', [Validators.required]],
    // END_DATE: ['', [Validators.required]],

    });

  }
  onLoad() {
    this.showLoading = false;

  }
   //iframe
   formSubmitted = false;
   clicked:boolean=false;
   iframeurl: any = ' ';

  View(event){
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    if(this.ngForm.valid){
      let obj = this.ngForm.value
      this.showRepo = true;
      let fromDate = moment(obj.from_Date).format('DD/MM/YYYY');
      let toDate = moment(obj.to_Date).format('DD/MM/YYYY');
      let branch = this.branch
      let scheme = this.schemetype
      let checkbox = obj.Schemewise 
      let Rdio = obj.T_TYPE
     



      this.iframeurl = this.report_url + "examples/Weeklyledgerbal.php?startDate='" + fromDate + "'&endDate='" + toDate  +  "'&type='" + checkbox + "'&branchName='" + branchName  + "'&branchcode='" + branch +  "&bankName=" + bankName + "";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
     
      
     
    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
     }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    this.showRepo = false;
    this.clicked = false;
    this.ngForm.controls['BRANCH_CODE'].reset()
    this.ngForm.controls['from_Date'].reset()
    this.ngForm.controls['to_Date'].reset()
    this.ngForm.controls['Schemewise'].reset()
  }

}
