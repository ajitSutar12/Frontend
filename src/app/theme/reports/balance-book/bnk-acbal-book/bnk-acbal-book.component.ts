import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bnk-acbal-book',
  templateUrl: './bnk-acbal-book.component.html',
  styleUrls: ['./bnk-acbal-book.component.scss']
})
export class BnkACBalBookComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  formSubmitted = false;

  showRepo: boolean = false;
  // Created Form Group
  angForm: FormGroup;
  //api
  url = environment.base_url;
  ngscheme: any = null
  ngBranchCode
  branchCode
  branch_code
  ngacno: any;
  obj: any[];
  selectedCode: any;
  account: any[];
  master: any;
  scheme: any[];
  schemeType
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public schemeTypeDropdown: SchemeTypeDropdownService,
    private _schemeService: SchemeAccountNoService,
    public SchemeCodeDropdownService: SchemeCodeDropdownService,
    private ownbranchMasterService: OwnbranchMasterService,
    private config: NgSelectConfig,
    public router: Router,) { 
      this.maxDate = new Date();
      this.minDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate())
    }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      BRANCH_CODE:  ['', [Validators.pattern, Validators.required]],
      AC_ACNOTYPE: ['', [Validators.pattern, Validators.required]],
      AC_TYPE: ['', [Validators.pattern, Validators.required]],
      FROM_AC_NO: ['', [Validators.pattern, Validators.required]],
      TO_AC_NO: ['', [Validators.pattern, Validators.required]],
     

    });
  }
  getData() {
    // this.ngscheme = null
    this.ngacno = null
    // this.selectedCode = null
    this.getIntroducer()
  }
    //get account no according scheme for introducer
    getIntroducer() {
      
      let scheme = this.ngscheme
      this.obj = [scheme, this.ngBranchCode]
      this.ngacno = null
      switch (this.selectedCode) {
        case 'SB':
          this._schemeService.getSavingSchemeList1(this.obj).subscribe(data => {
            this.account = data;
            console.log(this.account)
  
          })
          break;
  
        case 'SH':
          this._schemeService.getShareSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'CA':
          this._schemeService.getCurrentAccountSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'LN':
          this._schemeService.getTermLoanSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'TD':
          this._schemeService.getTermDepositSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'DS':
          this._schemeService.getDisputeLoanSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'CC':
          this._schemeService.getCashCreditSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'GS':
          this._schemeService.getAnamatSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'PG':
          this._schemeService.getPigmyAccountSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'AG':
          this._schemeService.getPigmyAgentSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
  
        case 'IV':
          this._schemeService.getInvestmentSchemeList1(this.obj).subscribe(data => {
            this.account = data;
  
          })
          break;
      }
    }

    selectedSchemeCode() {

      this.scheme = [];
      this.master.forEach(element => {
        if (element.S_ACNOTYPE == this.selectedCode) {
          let obj = { label: element.S_APPL, value: element.id, name: element.S_NAME };
          this.scheme.push(obj)
        }
      });
      this.ngscheme = null
      this.ngacno = null
    }
    view(event) {
  
      event.preventDefault();
      this.formSubmitted = true;
      if(this.angForm.valid){
        let obj = this.angForm.value
        
        const url="http://localhost/NewReport/report-code/Report/examples/DeadstockBalanceList.php";
        console.log(url);
        this.router.navigateByUrl(url);
      }
      else {
        Swal.fire('Warning!', 'Please Fill All Mandatory Field!', 'warning');
      }
    }
  


  close(){
    // this.resetForm()
  }
}
