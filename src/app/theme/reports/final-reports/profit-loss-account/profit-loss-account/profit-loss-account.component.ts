import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from "sweetalert2";
import { environment } from '../../../../../../environments/environment'
@Component({
  selector: 'app-profit-loss-account',
  templateUrl: './profit-loss-account.component.html',
  styleUrls: ['./profit-loss-account.component.scss'],
  providers:[OwnbranchMasterService]
})
export class ProfitLossAccountComponent implements OnInit {
// Created Form Group
angForm: FormGroup;
todate: any = null;
fromdate: any = null
maxDate: Date;
minDate: Date;
bsValue = new Date();
report_url = environment.report_url
showRepo: boolean = false;
iframeurl: any = ' ';
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
    })

  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
    })
  }
  view(event) {
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;

    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let start1date = moment(obj.START_DATE).format('DD/MM/YYYY');
      let branched2 = obj.BRANCH_CODE;

      this.iframeurl = this.report_url + "/Receiptconsine.php?start1date='" + start1date +"'&branched2='"+branched2+"'&bankName='" + bankName + "'";
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
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }
}
