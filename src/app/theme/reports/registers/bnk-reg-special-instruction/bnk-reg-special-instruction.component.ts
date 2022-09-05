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
  selector: 'app-bnk-reg-special-instruction',
  templateUrl: './bnk-reg-special-instruction.component.html',
  styleUrls: ['./bnk-reg-special-instruction.component.scss'],
  providers: [OwnbranchMasterService]
})
export class BnkRegSpecialInstructionComponent implements OnInit {
   // Created Form Group
   angForm: FormGroup;
   //  variable for validation
   formSubmitted = false;
   clicked:boolean=false;
   // showRepo=false;
   // branch name 
   selectedBranch: number;
   report_url = environment.report_url;
   url = environment.base_url;
   branch_code: any[]//from ownbranchmaster
   branchCode: any = null
   ngBranchCode
 
   // Date variables
   todate: any = null;
   fromdate: any = null;
   maxDate: Date;
   minDate: Date;
   showRepo: boolean = false;
   iframeurl: any = ' ';
   bsValue = new Date();
  //  showRepo: boolean = true;
  // showRepo: boolean = false;
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
  // Method to handle validation of form

  
  ngOnInit(): void {
    this.createForm()
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    })
  }

  createForm(
    ) {
      this.angForm = this.fb.group({
        BRANCH_CODE: ['', [Validators.required]],
        START_DATE: ['', [Validators.required]],
        END_DATE: ['', [Validators.required]],
        REVOKE_INST: [''],
      })
    }

  src: any;
  view(event){

    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.angForm.valid) {
     this.showRepo = true;
    let obj = this.angForm.value
    let stdate = moment(obj.START_DATE).format('DD/MM/YYYY');
    let etdate = moment(obj.END_DATE).format('DD/MM/YYYY');
    let branch = obj.BRANCH_CODE;
    let revoke = obj.REVOKE_INST;
 
 
    this.iframeurl = this.report_url+"examples/SpecialInstuction.php?stdate='" + stdate +"'&etdate='" + etdate + "'&branchName='"+branchName+ "'&revoke='"+revoke+"'&bankName='" + bankName + "'";
    this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);

    }
   
    // else if (this.angForm.controls['REVOKE_INST'].valid==true && this.angForm.valid) {
    //   this.showRepo = true;
    //  let obj = this.angForm.value
    //  let stdate = moment(obj.START_DATE).format('DD/MM/YYYY');
    //  let etdate = moment(obj.END_DATE).format('DD/MM/YYYY');
    //  let branch = obj.BRANCH_CODE;
    //  let revoke = obj.REVOKE_INST;
  
  
    //  this.iframeurl = "http://localhost/NewReport/phpjasperxml-master/examples/SpecialRevokeInstrut.php?stdate='" + stdate +"'&etdate='" + etdate + "'&branch='"+branch+ "'&revoke='"+revoke+"'&bankName='" + bankName + "'";
    //  this.iframeurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeurl);
 
    //  }

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

