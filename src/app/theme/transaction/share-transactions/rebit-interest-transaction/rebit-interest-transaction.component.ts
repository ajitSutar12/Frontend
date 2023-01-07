import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { first } from 'rxjs/operators';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rebit-interest-transaction',
  templateUrl: './rebit-interest-transaction.component.html',
  styleUrls: ['./rebit-interest-transaction.component.scss'],
  providers:[SchemeCodeDropdownService,SalaryDMasterdropdownService,SchemeAccountNoService],
})
export class RebitInterestTransactionComponent implements OnInit {
  ngForm: FormGroup;
  url = environment.base_url;
  //for date 
  datemax: any;
  startingdate: any = null
  endingdate: any = null
  processdate: any = null
  maxDate: Date;
  minDate: Date;

    // for dropdown ng module 

// schemeCode: any = null;
salary_divList: any = null;
ngSAccno
ngEAccno
//dropdown
scheme: any[];
salary_div: any[];
startingAC: any[];
schemeCode

EndingAC: any[];
selectedBranch
branchOption: any;
// schemeType: string = 'SH'
 

obj: any;

  
  constructor( private router: Router,
    private config: NgSelectConfig,
    private fb: FormBuilder,
    private systemParameter: SystemMasterParametersService,
    private schemeCodeDropdownService: SchemeCodeDropdownService,
    private SalaryDMasterdropdownService: SalaryDMasterdropdownService,
    private schemeAccountNoService: SchemeAccountNoService,private _ownbranchmasterservice: OwnbranchMasterService,) { }

  ngOnInit(): void {
    this.createForm();


    this._ownbranchmasterservice.getOwnbranchList().pipe(first()).subscribe(data => {
      this.branchOption = data;
    })

    this.schemeCodeDropdownService.getAllSchemeList().pipe(first()).subscribe(data => {
      var filtered = data.filter(function (scheme) {
        return (scheme.name == 'SH');
      });
      this.scheme = filtered;
     
    })
    this.systemParameter.getFormData(1).subscribe(data => {
      this.ngForm.patchValue({
        Process_Date: data.CURRENT_DATE
      })
    })
    // this.schemeCodeDropdownService.getSchemeCodeList(this.schemeType).pipe(first()).subscribe(data => {
    //   console.log(data,'scheme')
    //   this.scheme = data
    //   this.schemeCode = data[0].value
    //   this.getIntroducer()
    // })

     // Salary Division
     let data: any = localStorage.getItem('user');
     let result = JSON.parse(data);
     let branchCode = result.branch.id
     if (result.RoleDefine[0].Role.id == 1) {
       this.SalaryDMasterdropdownService.getSalaryMasterList().pipe(first()).subscribe(data => {
         this.salary_div = data;
       })
     }
     else {
       this.SalaryDMasterdropdownService.getSalaryDMasterList(branchCode).pipe(first()).subscribe(data => {
         this.salary_div = data;
       })
 
     }
    
    
  }
  createForm() {
    this.ngForm = this.fb.group({
     
      Scheme_code: ['', [Validators.required]],
       SalaryD_code: ['', [Validators.required]],
       starting_Account: ['', [Validators.required]],
       Ending_Account: ['', [Validators.required]],
       Starting_Date: ['', [Validators.required]],
       Ending_Date: ['', [Validators.required]],
       Process_Date: ['', [Validators.required]],
       Rate: [''],
       branch_code: ['', [Validators.required]],
       AC_TYPE: ['', [Validators.required]],
       TDS_RATE: ['', [Validators.required]],
    })

    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    if (result.RoleDefine[0].Role.id == 1) {
      this.ngForm.controls['branch_code'].enable()
      this.selectedBranch = result.branch.id
    }
    else {
      this.ngForm.controls['branch_code'].disable()
      this.ngForm.patchValue({
        'branch_code': result.branch.id
      })
      this.selectedBranch = result.branch.id
    }

  }
  decimalAllContent($event) {
    let value = Number($event.target.value);
    let data = value.toFixed(2);
    $event.target.value = data;
  }

  getschemename: any
  getIntro(event) {
    this.getschemename = event.name
    this.getIntroducer()
  }
  checkmargin(ele: any) {
    //check  if given value  is below 100
    if (ele <= 50) {
    } else {
      Swal.fire("Invalid Input", "Please insert values below 50", "error");
      this.ngForm.patchValue({
        TDS_RATE: 0
      })
    }
  }
  
  getIntroducer() {
    let data: any = localStorage.getItem('user');
    let result = JSON.parse(data);
    let branchCode = result.branch.id;
    this.obj = [this.schemeCode, branchCode]
    switch (this.getschemename) {


      case 'SH':
        this.schemeAccountNoService.getShareSchemeList1(this.obj).subscribe(data => {
          this.startingAC = data
          this.EndingAC = data
          this.ngSAccno =null
          this.ngEAccno =null
        })
        break;
      


    }
  }
}
