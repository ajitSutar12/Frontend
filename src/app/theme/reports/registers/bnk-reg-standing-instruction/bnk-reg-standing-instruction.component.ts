import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-bnk-reg-standing-instruction',
  templateUrl: './bnk-reg-standing-instruction.component.html',
  styleUrls: ['./bnk-reg-standing-instruction.component.scss'],
  providers: [OwnbranchMasterService]
})
export class BnkRegStandingInstructionComponent implements OnInit {
  // Created Form Group
  angForm: FormGroup;
  //  variable for validation
  formSubmitted = false;
  clicked:boolean=false;

  // showRepo=false;
  // branch name 
  selectedBranch: number;
  url = environment.base_url;
  branch_code: any[]//from ownbranchmaster
  branchCode: any = null
  ngBranchCode
  report_url = environment.report_url
  // Date variables
  todate: any = null;
  fromdate: any = null;
  maxDate: Date;
  minDate: Date;
  iframeurl: any = ' ';
  showRepo: boolean = false;
  bsValue = new Date();
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
  ) {
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
  }

  ngOnInit(): void {
    this.createForm()

    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })
  }
  // Method to handle validation of form
  createForm(
  ) {
    this.angForm = this.fb.group({
      BRANCH_CODE: ['', [Validators.required]],
      START_DATE: ['', [Validators.required]],
      END_DATE: ['', [Validators.required]],
      REVOKE_INST: [''],
    })
  }
  view(event) {
    
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;

    if (this.angForm.valid) {

      this.showRepo = true;
      let obj = this.angForm.value
      let stdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      let etdate = moment(obj.END_DATE).format('DD/MM/YYYY');
      let REVOKE_INST = obj.REVOKE_INST;
      let BRANCH_CODE = obj.BRANCH_CODE;

      this.iframeurl = this.report_url + "/StandingInstruction.php?stdate='" + stdate + "'etdate='" + etdate + "'REVOKE_INST='" + REVOKE_INST + "'BRANCH_CODE='" + BRANCH_CODE + "'&bankName='" + bankName + "' ";
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
    this.createForm()
    this.showRepo = false;
    this.clicked=false;
  }
}

