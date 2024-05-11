import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-bnk-reg-interest-instruction',
  templateUrl: './bnk-reg-interest-instruction.component.html',
  styleUrls: ['./bnk-reg-interest-instruction.component.scss']
})
export class BnkRegInterestInstructionComponent implements OnInit {
  // Created Form Group
  angForm: FormGroup;
  //  variable for validation
  formSubmitted = false;
  clicked:boolean=false;
  // showRepo = false;
  // branch name 
  selectedBranch: number;
  branch_codeList: any = null
  branch_code: any[]//from ownbranchmaster
  branchCode: any = null
  ngBranchCode
  url = environment.base_url;
  iframe3url: any = ' ';
  report_url = environment.report_url;
  showRepo: boolean = false;
  // Date variables
  todate: any = null;
  fromdate: any = null
  maxDate: Date;
  minDate: Date;
  bsValue = new Date();
  setLang:any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private ownbranchMasterService: OwnbranchMasterService,
    private systemParameter:SystemMasterParametersService,
    private translate:TranslateService

  ) {
    this.systemParameter.getFormData(1).subscribe(data => {
    
      this.setLang = data.SET_LANGUAGE
      this.translate.setDefaultLang(this.setLang);
    })
    this.todate = moment().format('DD/MM/YYYY');
    this.maxDate = new Date();
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate())
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
  ngOnInit(): void {
    this.createForm()
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.angForm.controls['BRANCH_CODE'].enable()
      this.ngBranchCode = result.branch.id
    }
    else {
      this.angForm.controls['BRANCH_CODE'].disable()
      this.ngBranchCode = result.branch.id
    }
    //branch List
    this.ownbranchMasterService.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branch_code = data;
      // this.ngBranchCode = data[0].value
    });

    this.systemParameter.getFormData(1).pipe(first()).subscribe(data => {
      this.todate = data.CURRENT_DATE;
    });

    this.systemParameter.getFormData(1).subscribe(data => {
      let year = moment(data.CURRENT_DATE, "DD/MM/YYYY").year()
      // this.fromdate = `01/04/${year - 1}`      
      this.todate = data.CURRENT_DATE
      
      this.fromdate = moment(`01/04/${year - 1}`, 'DD/MM/YYYY')
      this.fromdate = this.fromdate._d
    })
  }
  src: any;
  view(event) {
    debugger
    event.preventDefault();
    this.formSubmitted = true;

    let userData = JSON.parse(localStorage.getItem('user'));
    let bankName = userData.branch.syspara.BANK_NAME;
    let branchName = userData.branch.NAME

    if (this.angForm.valid) {
      this.showRepo = true;
      let obj = this.angForm.value
      let stdate = moment(obj.START_DATE).format('DD/MM/YYYY');
      // let etdate = moment(obj.END_DATE).format('DD/MM/YYYY');

  let etdate:any;
  if (this.todate == obj.END_DATE) {
    etdate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
  }else{ 
    etdate = moment(this.todate,'DD/MM/YYYY').format('DD/MM/YYYY')
  };

      let branch = obj.BRANCH_CODE;
      // let stdate = obj.START_DATE;
      // let etdate = obj.END_DATE;
      let revoke = obj.REVOKE_INST; 

      if(revoke == null || revoke==false){
        revoke = 0;
      }else{
        revoke = 1;
      }


      this.iframe3url = this.report_url+"examples/InterestInstruction.php?&stdate='" + stdate + "'&etdate='" + etdate + "'&branch='" + this.ngBranchCode + "'&revoke=" + revoke + "&bankName='" + bankName + "' &branchName ='"+branchName;
      console.log(this.iframe3url);
      this.iframe3url = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe3url);


      // let ageCaldate
    }
    else {
      Swal.fire(`${this.translate.instant('Swal_Msg.Warning')}`, `${this.translate.instant('Swal_Msg.Re1')}`, 'warning').then(()=>{ this.clicked=false});
    }
  }

  close() {
    this.resetForm()
  }

  resetForm() {
    // this.createForm()
    // this.angForm.controls.BRANCH_CODE.reset();
    this.angForm.controls.REVOKE_INST.reset();
    this.showRepo = false;
    this.clicked=false;
  }


}

