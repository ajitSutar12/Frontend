import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from "sweetalert2";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-n-profit-loss',
  templateUrl: './n-profit-loss.component.html',
  styleUrls: ['./n-profit-loss.component.scss'],
  providers:[OwnbranchMasterService]
})
export class NProfitLossComponent implements OnInit {
// Created Form Group
angForm: FormGroup;
todate: any = null;
fromdate: any = null
maxDate: Date;
minDate: Date;
bsValue = new Date();
report_url = environment.report_url;

iframeurl: any = ' ';
showRepo: boolean = false;
clicked:boolean=false;
  //Dropdown option variable
  ngbranch
  branchOption: any;

  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private sanitizer: DomSanitizer,) { 
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
      if (result.branchId == 1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngbranch = result.branch.id
      this.angForm.controls['BRANCH_CODE'].enable()
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngbranch = result.branch.id
    }
  
  }

  

  view(event) {

    event.preventDefault();
    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME;
    
    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let stardate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let endate = moment(obj.END_DATE).format('DD/MM/YYYY');
      let branched1 = obj.BRANCH_CODE;

      this.iframeurl = this.report_url +"examples/nformProfitAndLossAccount.php?stardate=" + stardate +"&endate="+endate+"&branched1="+this.ngbranch+"&bankName='" + bankName + "'&branchName='" + branchName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(()=>{ this.clicked=false});
    }

  }
  close() {
    this.resetForm()
  }
  // Reset Function
  resetForm() {
    // this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }

}
