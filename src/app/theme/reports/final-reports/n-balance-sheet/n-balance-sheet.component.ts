import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OwnbranchMasterService } from "src/app/shared/dropdownService/own-branch-master-dropdown.service";
import { first } from "rxjs/operators";
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from "sweetalert2";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-n-balance-sheet',
  templateUrl: './n-balance-sheet.component.html',
  styleUrls: ['./n-balance-sheet.component.scss'],
  providers: [OwnbranchMasterService]
})
export class NBalanceSheetComponent implements OnInit {
  // Created Form Group
  angForm: FormGroup;
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();


  iframeurl: any = ' ';
  showRepo: boolean = false;
  clicked: boolean = false;
  //Dropdown option variable
  ngbranch
  branchOption: any;
  report_url = environment.report_url;
  branchName: string;
  // showErrorMessage: boolean = false;
  // errorMessage: string = '';
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
      if (result.branchId == 100 && result.RoleDefine[0].Role.id==1) {
        this.branchOption.push({ value: '0', label: 'Consolidate' })
      }    })
  }

  // updateEndDate() {
  //     const currentDate = new Date();
  //     const enteredDate = new Date(this.angForm.controls['END_DATE'].value);
    
  //     const updatedDate = this.getValidDate(enteredDate, currentDate);
    
  //     this.angForm.controls['END_DATE'].setValue(updatedDate);
  //     this.showErrorMessage = false;
  //     this.errorMessage = (enteredDate > currentDate) ? 'Only the current date is allowed.' : '';
  //   }
    
  //   getValidDate(enteredDate: Date, currentDate: Date): Date {
  //     return (enteredDate > currentDate) ? currentDate : enteredDate;
  //   }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE: ["", [Validators.required]],
      START_DATE: ["", [Validators.required]],
      END_DATE: ["", [Validators.required]],
    })
  }

  view(event) {
    event.preventDefault();

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;

    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let stardate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let endate = moment(obj.END_DATE).format('DD/MM/YYYY');
      let branch = obj.BRANCH_CODE;
      if(branch == 0){
        this.branchName='Consolidate';
     }
      this.iframeurl =  this.report_url + "examples/NformBalanceSheet.php?stardate='" + stardate + "'&endate='" + endate + "'&branched1='" + this.branchName + "'&bankName='" + bankName + "'";
      this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl); 

    }
    else {
      Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning').then(() => { this.clicked = false });
    }

  }
  close() {
    this.resetForm()
  }
  // Reset Function
  resetForm() {
    this.createForm()
    this.showRepo = false;
    this.clicked = false;
  }


}
