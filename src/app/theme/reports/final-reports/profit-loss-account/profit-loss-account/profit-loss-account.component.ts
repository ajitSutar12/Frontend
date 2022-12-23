import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from "sweetalert2";
import { environment } from "src/environments/environment";
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


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

showRepo: boolean = false;
iframeurl: any = ' ';
report_url = environment.report_url;
clicked:boolean=false;

  //Dropdown option variable
  ngbranch
  branchOption: any;

  constructor(private fb: FormBuilder,
    private _ownbranchmasterservice: OwnbranchMasterService,
    private sanitizer: DomSanitizer,
    private systemParameter:SystemMasterParametersService,) { 
    // this.fromdate = moment().format('DD/MM/YYYY');
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

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.fromdate = data.CURRENT_DATE;
    });

  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
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
    // debugger
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;

    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      // let date = moment(obj.START_DATE).format('DD/MM/YYYY');

      let date:any;
      if (this.fromdate == obj.START_DATE) {
        date = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY')
      }else{ 
        date = moment(this.fromdate,'DD/MM/YYYY').format('DD/MM/YYYY')
      };

      let branch_code = obj.BRANCH_CODE;

      this.iframeurl = this.report_url+"examples/ProfitAndLossAccount.php?date=" + date +"&branch_code="+branch_code+"&bankName=" + bankName + "";
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
    // this.angForm.controls.BRANCH_CODE.reset();
    // this.angForm.controls.START_DATE.reset();
    this.showRepo = false;
    this.clicked=false;
  }
}
