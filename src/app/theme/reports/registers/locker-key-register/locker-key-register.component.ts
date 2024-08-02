import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-locker-key-register',
  templateUrl: './locker-key-register.component.html',
  styleUrls: ['./locker-key-register.component.scss']
})
export class LockerKeyRegisterComponent implements OnInit {
  ngForm: FormGroup;
  ngbranch: any = null;
  branchName: any;
  branchOption: any[];
  rackNo: any[] = [];
  formSubmitted = false;
  tScheme
  showRepo: boolean = false;
  clicked: boolean = false;
  todate: any = null;
  fromdate: any = null;
  iframe5url: any = ' ';
  bsValue = new Date();
  maxDate: any;
  minDate: any;
  report_url = environment.report_url;
  url = environment.base_url;
  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.createForm();
    //branch List
    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    });
    // this.http.get('http://192.168.1.153:3000/locker-rack-master/').subscribe((data: any) => {
    this.http.get(this.url+'/locker-rack-master/').subscribe((data: any) => {

      console.log("rack no:", data);
      this.rackNo = data;
    });
  }
  createForm() {
    this.ngForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.pattern, Validators.required]],
      RNo: ['', [Validators.required]],
      // Scheme_code: ["", [Validators.pattern, Validators.required]],
      // // radio_sort:new FormControl('rentreceipt'),
      // START_DATE: ["", [Validators.required]],
      // END_DATE: ["", [Validators.required]],
      S_Rank: ['', [Validators.required]],
      E_Rank: ['', [Validators.required]],
      DATEE: ["", [Validators.required]],
    });
  }

  getBranch(event) {
    this.ngbranch = event.value
    this.branchName = event.branchName
  }
  Rno
  Enk
  Snk
  getRNo(event) {
    this.Rno = event.RACK_NO;
    this.Enk = event.LOCKER_TONO;
    this.Snk = event.LOCKER_FROMNO;
  }


  view(event) {

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    let schemeName = this.tScheme

    if (this.ngForm.valid) {
      let obj = this.ngForm.value
      this.showRepo = true;

      // let flag = obj.radio_sort;

      // if(flag == 'rentreceipt'){
      //   flag = '1';
      // }else{
      //   flag = '0';
      // }

      //for start Date
      // if (this.fromdate == userData.branch.syspara.CURRENT_DATE) {
      //   obj['START_DATE'] = userData.branch.syspara.CURRENT_DATE
      // }
      // else {
      //   let date = moment(this.fromdate).format('DD/MM/YYYY');
      //   let tDate = moment(date, 'DD/MM/YYYY')
      //   obj['START_DATE'] = date
      // }
      // //for End Date
      // if (this.todate == userData.branch.syspara.CURRENT_DATE) {
      //   obj['END_DATE'] = userData.branch.syspara.CURRENT_DATE
      // }
      // else {
      //   let date = moment(this.todate).format('DD/MM/YYYY');
      //   let tDate = moment(date, 'DD/MM/YYYY')
      //   obj['END_DATE'] = date
      // }

      let RackNo = this.Rno;
      let ERank = this.Enk;
      let SRank = this.Snk;

      let Date = moment(obj.DATEE).format('DD/MM/YYYY');
      // debugger


      // this.iframe5url=this.report_url+"examples/LockerRegister.php?PRINT_DATE='" + obj.END_DATE + "'&BRANCH='" + this.branchName + "'&BANK_NAME='" + bankName + "'";
      //   this.iframe5url=this.report_url+"examples/LockerKeyRegister.php?BRANCH='" + this.branchName + 
      //  "'&BRANCH_CODE='" + this.ngbranch + 
      //   "'&PRINT_DATE='" + obj.END_DATE +  "'&RackNo='" + RackNo +  
      // "'&SRank='" + SRank +  "'&ERank='" + ERank + "'" +  "'&BANK_NAME='" + bankName ;
      this.iframe5url = this.report_url + "examples/LockerKeyRegister.php?startDate='" + Date + "'&BRANCH='" + branchName +
        "'&BRANCH_CODE='" + this.ngbranch +
        "'&RackNo='" + RackNo +
        "'&SRank='" + SRank + "'&ERank='" + ERank + "'&BANK_NAME='" + bankName;
      console.log(this.iframe5url)
      this.iframe5url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe5url);


    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }

  close() {
    this.resetForm()
  }


  resetForm() {
    this.ngForm.controls.RNo.reset();
    this.ngForm.controls.S_Rank.reset();
    this.ngForm.controls.E_Rank.reset();
    this.showRepo = false;
    this.clicked = false;

  }


}
